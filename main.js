const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 0,
    height: 0,
    // show:false,
    
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');

  // Open a new popup every 5 seconds
  setInterval(openPopup, 5000);
}

function openPopup() {
  let popupWindow = new BrowserWindow({
    width: "200%",
    height: "200%",
    webPreferences: {
      nodeIntegration: true
    }
  });

  popupWindow.loadURL('https://google.com');
}

app.on('ready', createWindow);
