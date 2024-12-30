document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'admin' && password === 'password'){
        window.electron.ipcRenderer.send('login-success');
    } else {
        alert('Invalid credentials');
    }
});