const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const Store = require("../utils/store");

const store = new Store();



// TO DO
// 1. Switch logging back on before packaging


const createWindow = () => {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		frame: false,
		toggleDevTools: true,
		titleBarStyle: "hidden",
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, "../../preload.js"),
			contextIsolation: true,
		},
	});

	win.loadFile(path.join(__dirname, "../../public/login.html"));


	ipcMain.on("login-success", () => {
		win.loadFile(path.join(__dirname, "../../public/index.html"));
		win.webContents.on("did-finish-load", () => {
			win.webContents.send('receive-balance', store.getBalance());
			console.log("message sent");
		});
	});


	ipcMain.on("update-balance", (event, newBalance) => {
		event.preventDefault();
		store.setBalance(newBalance);
		win.webContents.send('receive-balance', newBalance);
		console.log("balance updated");
	});

	ipcMain.on("get-balance", () => {
		win.webContents.send('receive-balance', store.getBalance());
	});
	
	ipcMain.on("dashboard-open", () => {
		console.log("dashboard-open event fired");
		win.loadFile(path.join(__dirname, "../../public/dashboard.html"));
		
	});

	ipcMain.on("main-open", () => {
		win.loadFile(path.join(__dirname, "../../public/index.html"));
	});

    ipcMain.on("cls-app", ()=>{
        win.close();
    });

    ipcMain.on("min-app", ()=>{
        win.minimize();
    });

    ipcMain.on("max-app", ()=>{
        win.maximize();
    });

	ipcMain.on("reload-app", ()=>{
        win.webContents.reloadIgnoringCache();
    });

};

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

console.log(app.getPath("userData"));