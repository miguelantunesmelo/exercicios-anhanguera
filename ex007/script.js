// Seleciona os elementos necessários
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const submenus = document.querySelectorAll('.submenu');

// Adiciona evento de clique no botão de menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Adiciona evento de clique nos submenus para dispositivos móveis
submenus.forEach(submenu => {
  submenu.addEventListener('click', () => {
    submenu.classList.toggle('open');
  });
});
