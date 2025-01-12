window.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");

    document.getElementById("logo").addEventListener("click", e => {
        e.preventDefault();
        window.electron.ipcRenderer.send("main-open");
    });

    const balanceInput = document.getElementById("balance");
    const balanceAmountElement = document.getElementById("balance-amount");

    document.getElementById("set-balance-btn").addEventListener("click", e => {
        e.preventDefault();
        const newBalance = parseFloat(balanceInput.value);
        if (!isNaN(newBalance)) {
            window.electron.ipcRenderer.send("update-balance", newBalance);
            balanceInput.value = ''; // Clear input after sending
        }
    });

    // Listen for balance updates from main process
    window.electron.ipcRenderer.receive("receive-balance", (balance) => {
        console.log("balance received", balance);
        balanceAmountElement.textContent = balance.toFixed(2);
    });

    // Request initial balance
    window.electron.ipcRenderer.send("get-balance");
});