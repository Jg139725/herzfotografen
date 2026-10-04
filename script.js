const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Preis-Kategorien
const priceButtons = document.querySelectorAll('.price-tabs button');
const pricePanels = document.querySelectorAll('.price-panel');
priceButtons.forEach(button => button.addEventListener('click', () => {
  priceButtons.forEach(b => b.classList.remove('active'));
  pricePanels.forEach(p => p.classList.remove('active'));
  button.classList.add('active');
  const panel = document.getElementById('price-' + button.dataset.price);
  if (panel) panel.classList.add('active');
}));
