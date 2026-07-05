const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Navigation
  navigate: (url) => ipcRenderer.send('navigate', url),
  goBack: () => ipcRenderer.send('go-back'),
  goForward: () => ipcRenderer.send('go-forward'),
  reload: () => ipcRenderer.send('reload'),
  stop: () => ipcRenderer.send('stop'),
  
  // DevTools
  openDevTools: () => ipcRenderer.send('open-devtools'),
  closeDevTools: () => ipcRenderer.send('close-devtools'),
  
  // Event listeners
  onUrlChanged: (callback) => {
    ipcRenderer.on('url-changed', (event, url) => callback(url));
  },
  onTitleChanged: (callback) => {
    ipcRenderer.on('title-changed', (event, title) => callback(title));
  },
  onLoadingStarted: (callback) => {
    ipcRenderer.on('loading-started', () => callback());
  },
  onLoadingStopped: (callback) => {
    ipcRenderer.on('loading-stopped', () => callback());
  }
});
