// Basit sabit kullanıcı adı/şifre ile giriş kontrolü
const USER = 'admin';
const PASS = '123456';

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === USER && p === PASS) {
    localStorage.setItem('panelAuth', 'ok');
    window.location.href = 'panel.html';
  } else {
    document.getElementById('loginError').classList.remove('d-none');
  }
});