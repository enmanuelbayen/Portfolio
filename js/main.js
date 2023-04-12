// mobile-menu
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
    title: 'Project number 1',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby On rail'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },

  projectNro2: {
    img: '../img/popUp-img-P.png',
    title: 'Project number 2',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby On rail'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },

  projectNro3: {
    img: '../img/popUp-img-P.png',
    title: 'Project number 3',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby On rail'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },

  projectNro4: {
    img: '../img/popUp-img-P.png',
    title: 'Project number 4',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby On rail'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },

  projectNro5: {
    img: '../img/popUp-img-P.png',
    title: 'Project number 5',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby On rail'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },

  projectNro6: {
    img: '../img/popUp-img-P.png',
    title: 'Project number 6',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby On rail'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },

  projectNro7: {
    img: '../img/popUp-img-P.png',
    title: 'Multi Post Stories',
    descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tech: ['HTML', 'Bootstrap', 'Ruby', 'CSS'],
    liveBttn: 'https://enmanuelbayen.github.io/Portfolio/',
    sourceBttn: 'https://github.com/enmanuelbayen/Portfolio',
  },
};

const projectBttns = document.querySelectorAll('.project-button');

const bodyVar = document.querySelector('body');

projectBttns.forEach((projectBttn) => {
  projectBttn.addEventListener('click', () => {
    const projectNroId = projectBttn.id.replace('-button', '');
    const projectDeckMain = projectDeck[projectNroId];
    const popUp = document.createElement('div');
    popUp.className = 'popUp-container';
    popUp.innerHTML = `
      <div class="project-popup-card">
        <div class="header-popup-card">
          <h2 class="subtitle-pop-card">${projectDeckMain.title}</h2>
          <button class="xBttn">X</button>
        </div> 
        <ul class="tech-popup-card">
          <li class="tech-list">${projectDeckMain.tech[0]}</li>
          <li class="tech-list">${projectDeckMain.tech[1]}</li>
          <li class="tech-list">${projectDeckMain.tech[2]}</li>
        </ul>
        <div class="body-popup-card">
          <img class="JSproject-img" src="${projectDeckMain.img}" alt="PopUp project img">
          <p class="paragrah-popup-mobile">${projectDeckMain.descrip}</p>
          <div class="text-popup-card">
            <p class="paragrah-popup-desk">${projectDeckMain.descrip}</p>
            <button class="liveVersionBttn"><a href="${projectDeckMain.liveBttn}">See live <img class="JSimg-icon" src="../img/liveBttn-icon.png" alt="live icon"> </a></button>
            <button class="sourceBttn"><a href="${projectDeckMain.sourceBttn}">See source <img class="JSimg-icon" src="../img/sourceGithub-icon.png" alt="github icon"></a></button>
          </div>
        </div>
      </div>
    `;

      bodyVar.appendChild(popUp);

    const close = document.querySelector('.xBttn');
    close.addEventListener('click', () => {
      bodyVar.removeChild(popUp);
    });
  });
});
