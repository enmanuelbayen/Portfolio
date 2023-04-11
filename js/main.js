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
    img: '',
    title: 'Profesional Art Printing Data',
    descrip: 'A daily selection of privately personalized read',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Ruby',
    liveBttn: '',
    sourceBttn: '',
  }, 

  projectNro2: {
    img: '',
    title: 'Profesional Art Printing Data',
    descrip: 'A daily selection of privately personalized read',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Ruby',
    liveBttn: '',
    sourceBttn: '',
  }, 

  projectNro3: {
    img: '',
    title: 'Profesional Art Printing Data',
    descrip: 'A daily selection of privately personalized read',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Ruby',
    liveBttn: '',
    sourceBttn: '',
  }, 

  projectNro4: {
    img: '',
    title: 'Profesional Art Printing Data',
    descrip: 'A daily selection of privately personalized read',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Ruby',
    liveBttn: '',
    sourceBttn: '',
  }, 

  projectNro5: {
    img: '',
    title: 'Profesional Art Printing Data',
    descrip: 'A daily selection of privately personalized read',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Ruby',
    liveBttn: '',
    sourceBttn: '',
  }, 

  projectNro6: {
    img: '',
    title: 'Profesional Art Printing Data',
    descrip: 'A daily selection of privately personalized read',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Ruby',
    liveBttn: '',
    sourceBttn: '',
  }, 
}

const projectBttn = document.querySelectorAll('.button_project'); 

projectBttn.addEventListener('click', () => {
  const popUp = document.createElement('div');
  popUp.className('popUp-container');
  popUp.innerHTML = `
  
`;

const xBttn = document.getElementById('xBttn');
})



