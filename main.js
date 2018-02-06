const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow();

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`)

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);
