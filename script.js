// Ativa ícones Lucide e destaca o link ativo do menu
document.addEventListener('DOMContentLoaded', () => {
  // Cria os ícones
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // Destacar link ativo com base na URL atual
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
