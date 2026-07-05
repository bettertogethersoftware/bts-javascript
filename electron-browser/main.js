const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');

let mainWindow;
let currentView = null;
let history = [];
let historyIndex = -1;

function createWindow() {
  // Create the main application window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'icon.png'),
    frame: true,
    titleBarStyle: 'default'
  });

  // Load the browser UI (toolbar, address bar, etc.)
  mainWindow.loadFile('index.html');

  // Create a BrowserView for web content
  currentView = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      partition: 'persist:browser-session'
    }
  });

  mainWindow.setBrowserView(currentView);
  
  // Position and size the BrowserView
  const updateViewBounds = () => {
    const bounds = mainWindow.getBounds();
    currentView.setBounds({ 
      x: 0, 
      y: 60, // Height of toolbar
      width: bounds.width, 
      height: bounds.height - 60 
    });
  };

  updateViewBounds();
  mainWindow.on('resize', updateViewBounds);

  // Navigate to default page
  navigateTo('https://www.google.com');

  mainWindow.on('closed', () => {
    mainWindow = null;
    currentView = null;
  });
}

function navigateTo(url) {
  if (!currentView) return;

  // Ensure URL has protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  currentView.webContents.loadURL(url);
  
  // Update history
  if (historyIndex < history.length - 1) {
    history = history.slice(0, historyIndex + 1);
  }
  history.push(url);
  historyIndex++;

  // Send URL update to renderer
  mainWindow.webContents.send('url-changed', url);
}

function goBack() {
  if (historyIndex > 0 && currentView) {
    historyIndex--;
    currentView.webContents.loadURL(history[historyIndex]);
    mainWindow.webContents.send('url-changed', history[historyIndex]);
  }
}

function goForward() {
  if (historyIndex < history.length - 1 && currentView) {
    historyIndex++;
    currentView.webContents.loadURL(history[historyIndex]);
    mainWindow.webContents.send('url-changed', history[historyIndex]);
  }
}

function reload() {
  if (currentView) {
    currentView.webContents.reload();
  }
}

function stop() {
  if (currentView) {
    currentView.webContents.stop();
  }
}

// App event listeners
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for communication with renderer process
const { ipcMain } = require('electron');

ipcMain.on('navigate', (event, url) => {
  navigateTo(url);
});

ipcMain.on('go-back', () => {
  goBack();
});

ipcMain.on('go-forward', () => {
  goForward();
});

ipcMain.on('reload', () => {
  reload();
});

ipcMain.on('stop', () => {
  stop();
});

ipcMain.on('open-devtools', () => {
  if (currentView) {
    currentView.webContents.openDevTools();
  }
});

ipcMain.on('close-devtools', () => {
  if (currentView) {
    currentView.webContents.closeDevTools();
  }
});

// Handle navigation events from BrowserView
app.whenReady().then(() => {
  if (currentView) {
    currentView.webContents.on('did-navigate', (event, url) => {
      mainWindow.webContents.send('url-changed', url);
      // Update history for direct navigations
      if (history[historyIndex] !== url) {
        if (historyIndex < history.length - 1) {
          history = history.slice(0, historyIndex + 1);
        }
        history.push(url);
        historyIndex++;
      }
    });

    currentView.webContents.on('did-navigate-in-page', (event, url) => {
      mainWindow.webContents.send('url-changed', url);
    });

    currentView.webContents.on('page-title-updated', (event, title) => {
      mainWindow.webContents.send('title-changed', title);
    });

    currentView.webContents.on('did-start-loading', () => {
      mainWindow.webContents.send('loading-started');
    });

    currentView.webContents.on('did-stop-loading', () => {
      mainWindow.webContents.send('loading-stopped');
    });
  }
});
