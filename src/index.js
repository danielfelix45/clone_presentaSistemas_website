const btn = document.querySelector('.btnTop');
const header = document.querySelector('.header')

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

// Aqui manipula o Header o header quando scroll
function shortenHeader(){
  if(window.scrollY === 0){
    header.classList.add('md:h-32')
  }else{
    header.classList.remove('md:h-32')
  }
};

document.addEventListener('scroll', function() {
  ocultarBtn()
  shortenHeader()
});

// Abre e fecha o menu
const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
  e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline'
  navLinks.classList.toggle('top-[100%]')
}

