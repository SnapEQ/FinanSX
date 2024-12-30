window.addEventListener("DOMContentLoaded", () => {
	

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');
	console.log("clicked");

	toggleBtnIcon.classList = isOpen
	? 'fa-solid fa-xmark'
	: 'fa-solid fa-bars';
};
    

const welcomeBackHeader = document.getElementById("welcome-back-h");

	welcomeBackHeader.innerHTML = `Welcome back, ${window.login.username()}!`


document.getElementById("dashboard-link").addEventListener("click", (e) => {
	e.preventDefault();
	window.electron.ipcRenderer.send('dashboard-open');
});


document.getElementById("dropdown-dashboard-link").addEventListener("click", (e) => {
	e.preventDefault();
	window.electron.ipcRenderer.send('dashboard-open');	
});

document.getElementById("logo").addEventListener("click", (e) => {
	e.preventDefault();
	window.electron.ipcRenderer.send('main-open');
});

});
