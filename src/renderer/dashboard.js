document.getElementById("logo").addEventListener("click", (e) => {
	e.preventDefault();
	window.electron.ipcRenderer.send('main-open');
});