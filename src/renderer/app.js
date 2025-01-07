window.addEventListener("DOMContentLoaded", () => {
	

const welcomeBackHeader = document.getElementById("welcome-back-h");

	welcomeBackHeader.innerHTML = `Welcome back, ${window.login.username()}!`;

});
