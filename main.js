// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const tasklist = require('tasklist')

  (async () => {
    return await tasklist();

    /*
    [{
      imageName: 'taskhostex.exe',
      pid: 1820,
      sessionName: 'Console',
      sessionNumber: 1,
      memUsage: 4415488
    }, …]
    */
  }).then(function (value) { console.log(value) });

// var _ = require('lodash');
// var ps = require('current-processes');

// ps.get(function (err, processes) {

//   var sorted = _.sortBy(processes, 'cpu');
//   var top5 = sorted.reverse().splice(0, 20);

//   console.log(top5);
// });

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  //刪除上面選單 
  mainWindow.removeMenu()
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    sleep(30000)
    task.then(function (value) { console.log(value) })
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
