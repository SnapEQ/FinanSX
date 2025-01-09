
window.addEventListener("DOMContentLoaded", () => {

	console.log("DOMContentLoaded event fired");

	document.getElementById("logo").addEventListener("click", e => {
		e.preventDefault();
		window.electron.ipcRenderer.send("main-open");
	});


	const balanceAmountElement = document.getElementById("balance-amount");

	window.electron.ipcRenderer.receive("receive-balance", (balance) => {
		console.log("balance received", balance);
		balanceAmountElement.textContent = balance;
	});
});
