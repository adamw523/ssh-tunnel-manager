import { app, BrowserWindow, ipcMain } from 'electron';
import * as mainConnections from './main-connections';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

let listener = {
  updateStatus: (id, status, message) => {
    console.log('listener got', id, status, message);
    win.webContents.send('update-connection-status', id, status, message);
  },

  gotError: (id, code, error) => {
    console.log('listener got', id, code, error);
    win.webContents.send('received-error', id, code, error);
  }
}

ipcMain.on('start-connection', (event, connection) => {
  mainConnections.connect(connection, listener);
});

ipcMain.on('stop-connection', (event, connection) => {
  mainConnections.disconnect(connection, listener);
});

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({width: 1200, height: 600});

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

