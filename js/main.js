// main.js
// 正しいパスワードを設定
const correctPassword = 'yourpassword'; // パスワードを設定

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginDiv = document.getElementById('login');
    const contentDiv = document.querySelector('.container');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        if (password === correctPassword) {
            loginDiv.style.display = 'none';
            contentDiv.style.display = 'block';
        } else {
            alert('Incorrect password!');
        }
    });
});

function navigateTo(page) {
    window.location.href = page;
}
