const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'future.png')

function CreateTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Temporizer')
  return tray
}

module.exports = CreateTray()