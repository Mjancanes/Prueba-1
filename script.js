document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  // 1) Arranca con la preferencia guardada
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    btn.textContent = '☀️Cambiar el modo';
  }
  // 2) Al click, alterna clase + emoji + persistencia
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    btn.textContent = isDark ? '☀️Modo Claro' : '🌙Modo Obscuro';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
