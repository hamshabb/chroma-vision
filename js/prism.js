'use strict';

function prismRender() {
  //document.getElementbyID('beam-r').style.transform =  {}
  // let beamR = document.getElementById('beam-r');
  // beamR.classList.add('refract');
  let diffractees = document.querySelectorAll('.rectangle');
  for (let i = 0; i < diffractees.length; i++) {
    diffractees[i].classList.add('refract');
  }
  let colorees = document.querySelectorAll('.about-box');
  for (let i = 0; i < colorees.length; i++) {
    colorees[i].classList.add('refract');
  }
}

//let prism = document.getElementbyID('prism');

let prismButton = document.getElementById('prism-button');

function handlePrismClick(e) {// eslint-disable-line
  prismButton.remove();
  prismRender();
  e.preventDefault();
}

prismButton.addEventListener('click', handlePrismClick);

