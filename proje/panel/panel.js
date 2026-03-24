// Panel giriş kontrolü ve sekme yönetimi
if (localStorage.getItem('panelAuth') !== 'ok') {
  window.location.href = 'index.html';
}

document.getElementById('logoutBtn').onclick = function() {
  localStorage.removeItem('panelAuth');
  window.location.href = 'index.html';
};

function showSection(id) {
  document.querySelectorAll('.panel-section').forEach(el => el.classList.add('d-none'));
  document.getElementById(id).classList.remove('d-none');
}
