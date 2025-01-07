const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

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
	});

	ipcMain.on("dashboard-open", () => {
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
