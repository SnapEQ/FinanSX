
document.getElementById("min-btn").addEventListener("click", (e)=>{
	e.preventDefault();
    window.electron.ipcRenderer.send('min-app');
});

document.getElementById("max-btn").addEventListener("click", (e)=>{
	e.preventDefault();
    window.electron.ipcRenderer.send('max-app');
});

document.getElementById("close-btn").addEventListener("click", (e)=>{
	e.preventDefault();
    window.electron.ipcRenderer.send('cls-app');
});