const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const api = require('./server');

let win

function createWindow () {
  try {
    api();  
  } catch (error) {
    console.log(error);
  }
  
  win = new BrowserWindow({show: false})

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname + '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools optionally:
  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  win.maximize()

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})