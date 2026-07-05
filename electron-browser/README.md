# Electron Browser

A full-featured web browser built with Electron.

## Features

- **Navigation Controls**: Back, Forward, Reload, Stop, and Home buttons
- **Address Bar**: Enter URLs directly or search terms
- **Security Indicator**: Shows HTTPS/HTTP status with color-coded icon
- **Loading Indicator**: Animated progress bar during page loads
- **Status Bar**: Displays current URL and loading status
- **Developer Tools**: Built-in DevTools access (F12)
- **Keyboard Shortcuts**:
  - `Ctrl+L` / `Cmd+L`: Focus address bar
  - `Ctrl+R` / `Cmd+R` / `F5`: Reload page
  - `F12`: Toggle Developer Tools
  - `Alt+Left Arrow`: Go back
  - `Alt+Right Arrow`: Go forward
  - `Escape`: Stop loading

## Installation

1. Make sure you have Node.js installed (v16 or later recommended)
2. Navigate to the project directory:
   ```bash
   cd electron-browser
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the browser:
```bash
npm start
```

## Project Structure

```
electron-browser/
├── main.js          # Main Electron process (browser logic)
├── preload.js       # Preload script (secure IPC bridge)
├── renderer.js      # Renderer process (UI logic)
├── index.html       # Browser UI HTML
├── styles.css       # Browser UI styles
└── package.json     # Project configuration
```

## Technologies Used

- **Electron**: Cross-platform desktop app framework
- **BrowserView**: Embedded web content rendering
- **IPC**: Secure communication between main and renderer processes

## Notes

- The browser uses a persistent session for cookies and local storage
- All web content is rendered in a secure BrowserView with nodeIntegration disabled
- Context isolation is enabled for enhanced security
