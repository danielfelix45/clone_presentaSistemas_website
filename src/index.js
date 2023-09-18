const btn = document.querySelector('#btnTop');

// Faz o botão ir para o topo da página
btn.addEventListener('click', function(){
  window.scrollTo(0,0)
});

// Esconde o botão quando chega no topo
function ocultarBtn(){
  if(window.scrollY > 10){
    btn.classList.remove('hidden')
  }else{
    btn.classList.add('hidden')
  }
};

document.addEventListener('scroll', function() {
  ocultarBtn()
});

// Abre e fecha o menu
const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
  e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline'
  navLinks.classList.toggle('top-[100%]')
}

