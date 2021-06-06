const { BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 250,
    height: 310,
    resizable: false,
    fullscreenable: false,
  })

  win.loadFile('index.html')

  return win
}

module.exports = createWindow()