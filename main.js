window.addEventListener('scroll', onScroll);

onScroll();
function onScroll(){
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2;

  // Verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // Verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if(sectionBoundaries){
    menuElement.classList.add('active');
  }
}

function showNavOnScroll(){
  if(scrollY > 0){
    const $nav = document.querySelector('#navigation');
    $nav.classList.add('scroll');
  } else{
    const $nav = document.querySelector('#navigation');
    $nav.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 550){
    const $backToTop = document.querySelector('#backToTopButton');
    $backToTop.classList.add('show');
  } else{
    const $backToTop = document.querySelector('#backToTopButton');
    $backToTop.classList.remove('show');
  }
}

function openMenu(){
  const $body = document.querySelector('body');
  $body.classList.add('menu-expanded');
}

function closeMenu(){
  const $body = document.querySelector('body');
  $body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 700
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, about .content ');