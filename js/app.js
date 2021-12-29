'use strict';


//global variables

const testSequence = [];
let testIndex = 0;
let maxLength = 13;

const progressWidth = [8,16,24,32,40,48,56,64,72,80,88,96,100];



let theNewTest = [];

//user score
let score = 0;
//Window to DOM
let myContainer = document.getElementById('container');

//accessing Dom images
let imageTest = document.getElementById('image-test');

// form
let form = document.createElement('form');

//start-button

let startTest = document.getElementById('start-button');

// Submit button
let submitbutton = document.createElement('button');


let startImage = document.getElementById('starting-image');

let startInformation = document.getElementById('test-information');





//Test Constructor
function Tester(name, answer, fileExtension = 'jpeg') {
  this.name = name;
  this.src = `../img/${name}.${fileExtension}`;
  this.answer = answer;
  testSequence.push(this);

}





// Load in test images
new Tester('test-01', 12);
new Tester('test-02', 8);
new Tester('test-03', 6);
new Tester('test-04', 29);
new Tester('test-05', 57);
new Tester('test-06', 5);
new Tester('test-07', 3);
new Tester('test-08', 15);
new Tester('test-09', 74);
new Tester('test-10', 2);
new Tester('test-11', 6);
new Tester('test-12', 97);
new Tester('test-13', 45);
new Tester('test-14', 5);



// random number generator
function getRandomIndex() {
  return Math.floor(Math.random() * testSequence.length);
}


// populate a new array with a randomized test sequence
while (theNewTest.length < testSequence.length) {
  let randoNum = getRandomIndex();
  while (!theNewTest.includes(randoNum)) {
    theNewTest.unshift(randoNum);
  }
}

console.log(theNewTest);
// function to render images
function renderImages() {

  imageTest.src = testSequence[theNewTest[testIndex]].src;
  imageTest.alt = testSequence[theNewTest[testIndex]].name;

}






//Event handlers


//Event handler for start test button
function handleStartTest(e) { // eslint-disable-line

  renderImages();

  let myProgress = document.getElementById('myProgress');

  let myBar = document.createElement('div');
  myBar.setAttribute('style', 'width:0%');
  myBar.setAttribute('id', 'myBar');

  myProgress.appendChild(myBar);
  //console.log('i am here first');
  startImage.remove();
  startTest.remove();
  startInformation.remove();

  myContainer.appendChild(form);


  let label = document.createElement('label');
  label.textContent = 'What Number do you See?';

  form.appendChild(label);


  let input = document.createElement('input');

  input.setAttribute('type', 'number');
  input.setAttribute('name', 'answer');
  input.setAttribute('id', 'answer');
  input.setAttribute('required', 'true');

  form.appendChild(input);

  submitbutton.setAttribute('id', 'submit');
  submitbutton.setAttribute('type', 'submit');
  submitbutton.textContent = 'Submit';
  form.appendChild(submitbutton);

}


// Event Handler
function handleSubmit(e) {

  let myBar = document.getElementById('myBar');

  myBar.setAttribute('style', `width:${progressWidth[testIndex]}%`);
  myBar.textContent=`${progressWidth[testIndex]}%`;

  e.preventDefault();
  //console.log(e.target.answer);

  let correctAnswer = +e.target.answer.value;

  //console.log(correctAnswer);

  if (correctAnswer === testSequence[theNewTest[testIndex]].answer) {
    score++;
  }
  console.log(score);
  testIndex++;





  if (testIndex === maxLength) {
    form.remove();
    imageTest.remove();
    let a = document.createElement('a');

    a.setAttribute('href', 'result.html');
    a.setAttribute('id', 'show-results');
    a.textContent = 'Show Results';
    myContainer.appendChild(a);
    let saveDataArray = [score, maxLength];
    let stringifiedData = JSON.stringify(saveDataArray);
    localStorage.setItem('scores', stringifiedData);

  }


  form.reset();
  renderImages();


}


//Event Listeners

//Event listener for starting test
startTest.addEventListener('click', handleStartTest);

//Event listener for button submission
form.addEventListener('submit', handleSubmit);
