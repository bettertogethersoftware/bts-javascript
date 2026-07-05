// DOM Elements
const backBtn = document.getElementById('back-btn');
const forwardBtn = document.getElementById('forward-btn');
const reloadBtn = document.getElementById('reload-btn');
const stopBtn = document.getElementById('stop-btn');
const homeBtn = document.getElementById('home-btn');
const urlInput = document.getElementById('url-input');
const goBtn = document.getElementById('go-btn');
const devtoolsBtn = document.getElementById('devtools-btn');
const menuBtn = document.getElementById('menu-btn');
const loadingIndicator = document.getElementById('loading-indicator');
const statusBar = document.getElementById('status-bar');
const statusText = document.getElementById('status-text');
const securityIcon = document.getElementById('security-icon');

let currentUrl = '';
let isLoading = false;

// Initialize the browser UI
function init() {
  // Set up event listeners
  backBtn.addEventListener('click', () => {
    window.electronAPI.goBack();
  });

  forwardBtn.addEventListener('click', () => {
    window.electronAPI.goForward();
  });

  reloadBtn.addEventListener('click', () => {
    window.electronAPI.reload();
  });

  stopBtn.addEventListener('click', () => {
    window.electronAPI.stop();
  });

  homeBtn.addEventListener('click', () => {
    navigateTo('https://www.google.com');
  });

  goBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (url) {
      navigateTo(url);
    }
  });

  urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const url = urlInput.value.trim();
      if (url) {
        navigateTo(url);
      }
    }
  });

  urlInput.addEventListener('focus', () => {
    urlInput.select();
  });

  devtoolsBtn.addEventListener('click', () => {
    window.electronAPI.openDevTools();
  });

  menuBtn.addEventListener('click', showMenu);

  // Set up IPC listeners
  window.electronAPI.onUrlChanged((url) => {
    updateUrlDisplay(url);
  });

  window.electronAPI.onTitleChanged((title) => {
    document.title = title ? `${title} - Electron Browser` : 'Electron Browser';
  });

  window.electronAPI.onLoadingStarted(() => {
    setLoading(true);
  });

  window.electronAPI.onLoadingStopped(() => {
    setLoading(false);
  });

  // Initialize with default URL
  updateUrlDisplay('https://www.google.com');
}

function navigateTo(url) {
  window.electronAPI.navigate(url);
}

function updateUrlDisplay(url) {
  currentUrl = url;
  urlInput.value = url;
  
  // Update security icon based on protocol
  if (url.startsWith('https://')) {
    securityIcon.style.color = '#2e7d32'; // Green for HTTPS
  } else if (url.startsWith('http://')) {
    securityIcon.style.color = '#f57c00'; // Orange for HTTP
  } else {
    securityIcon.style.color = '#999'; // Gray for other protocols
  }
  
  updateStatusBar(`Loaded: ${url}`);
}

function setLoading(loading) {
  isLoading = loading;
  if (loading) {
    loadingIndicator.classList.add('active');
    updateStatusBar('Loading...');
  } else {
    loadingIndicator.classList.remove('active');
    updateStatusBar('Ready');
  }
  
  // Update button states
  reloadBtn.disabled = loading;
  stopBtn.disabled = !loading;
}

function updateStatusBar(message) {
  statusText.textContent = message;
}

function showMenu() {
  // Simple menu implementation - in a real app, this would show a dropdown
  const menuItems = [
    { label: 'New Window', action: () => alert('New Window feature') },
    { label: 'New Incognito Window', action: () => alert('Incognito feature') },
    { label: 'History', action: () => alert('History feature') },
    { label: 'Downloads', action: () => alert('Downloads feature') },
    { label: 'Bookmarks', action: () => alert('Bookmarks feature') },
    { label: 'Settings', action: () => alert('Settings feature') },
    { label: 'Help', action: () => alert('Help feature') },
    { label: 'About', action: () => alert('Electron Browser v1.0.0') }
  ];

  // Create a simple context menu
  const menu = document.createElement('div');
  menu.style.cssText = `
    position: fixed;
    top: 60px;
    right: 12px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 8px 0;
    z-index: 1000;
    min-width: 200px;
  `;

  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.textContent = item.label;
    menuItem.style.cssText = `
      padding: 10px 16px;
      cursor: pointer;
      transition: background 0.2s;
    `;
    menuItem.addEventListener('mouseenter', () => {
      menuItem.style.background = '#f0f0f0';
    });
    menuItem.addEventListener('mouseleave', () => {
      menuItem.style.background = 'white';
    });
    menuItem.addEventListener('click', () => {
      item.action();
      menu.remove();
    });
    menu.appendChild(menuItem);
  });

  document.body.appendChild(menu);

  // Close menu when clicking outside
  setTimeout(() => {
    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  }, 100);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + L to focus address bar
  if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
    e.preventDefault();
    urlInput.focus();
    urlInput.select();
  }
  
  // Ctrl/Cmd + R to reload
  if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
    e.preventDefault();
    window.electronAPI.reload();
  }
  
  // F5 to reload
  if (e.key === 'F5') {
    e.preventDefault();
    window.electronAPI.reload();
  }
  
  // F12 to toggle dev tools
  if (e.key === 'F12') {
    e.preventDefault();
    window.electronAPI.openDevTools();
  }
  
  // Alt + Left Arrow for back
  if (e.altKey && e.key === 'ArrowLeft') {
    e.preventDefault();
    window.electronAPI.goBack();
  }
  
  // Alt + Right Arrow for forward
  if (e.altKey && e.key === 'ArrowRight') {
    e.preventDefault();
    window.electronAPI.goForward();
  }
  
  // Escape to stop loading
  if (e.key === 'Escape') {
    window.electronAPI.stop();
  }
});

// Initialize on load
init();
