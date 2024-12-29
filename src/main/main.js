const {app, BrowserWindow,Menu, ipcMain} = require('electron');
const path = require('path');



const createWindow = () =>{
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        autoHideMenuBar: false,
        toggleDevTools: true,
        webPreferences:{
            nodeIntegration: false,
            preload: path.join(__dirname, '../../preload.js'),
            contextIsolation: true,
        }
    })

    win.loadFile(path.join(__dirname, '../../public/login.html'));


    ipcMain.on('login-success', () => {
        win.loadFile(path.join(__dirname, '../../public/index.html'));
    });
}

app.whenReady().then(()=>{
    createWindow()

    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length===0) createWindow()
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })