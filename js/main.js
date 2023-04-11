//mobile-menu
const mobileMenu = document.querySelector('.contenedor');
const menuBttn = document.getElementById('menu-icon');
const anchorList = document.querySelectorAll('.anchor-section');

menuBttn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

const remove = document.querySelector('.x-remove');

remove.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

anchorList.forEach((anchorList) => {
  anchorList.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});
// project.popUp
const projectDeck = {
  
  projectNro1: {
    img: '../img/popUp-img-P.png',
    title: 'Profesional  project number 1',
    descrip: 'A daily selection of privately personalized read',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  }, 

  projectNro2: {
    img: 'popUp-img-P.png',
    title: 'Profesional  project number 2',
    descrip: 'A daily selection of privately personalized read',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  }, 

  projectNro3: {
    img: 'popUp-img-P.png',
    title: 'Profesional  project number 3',
    descrip: 'A daily selection of privately personalized read',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  }, 

  projectNro4: {
    img: 'popUp-img-P.png',
    title: 'Profesional  project number 4',
    descrip: 'A daily selection of privately personalized read',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  }, 

  projectNro5: {
    img: 'popUp-img-P.png',
    title: 'Profesional  project number 5',
    descrip: 'A daily selection of privately personalized read',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  }, 

  projectNro6: {
    img: 'popUp-img-P.png',
    title: 'Profesional  project number 6',
    descrip: 'A daily selection of privately personalized read',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  }, 
}

const projectBttn = document.getElementById('project-card1'); 

projectBttn.addEventListener('click', () => {
  const popUp = document.createElement('div');
  popUp.className = 'popUp-container';
  popUp.innerHTML = `
  <div class="project-popup-card">
  <div class="header-popup-card">
  <h2 class="subtitle-pop-card">${projectDeck.projectNro1.title}</h2>
  <button class="xBttn">X</button>
 </div> 
 <ul class="tech-popup-card">
  <li class="tech-list">${projectDeck.projectNro1.tech[0]}</li>
  <li class="tech-list">${projectDeck.projectNro1.tech[1]}</li>
  <li class="tech-list">${projectDeck.projectNro1.tech[2]}</li>
</ul>
 <div class="body-popup-card">
  <img src="${projectDeck.projectNro1.img}" alt="PopUp project img">
  <div class="text-popup-card">
    <p class="paragrah-popup">${projectDeck.projectNro1.descrip}</p>
    <button class="liveVersionBttn"><a href="${projectDeck.projectNro1.liveBttn}">See live</a></button>
    <button class="sourceBttn"><a href="${projectDeck.projectNro1.sourceBttn}">See source</a></button>
  </div>
 </div>
</div>
`;

body.appendchild(popUp);

const close = document.querySelectorAll('xBttn');
close.addEventListener('click', () => {
  body.removechild(popUp);
});
});



