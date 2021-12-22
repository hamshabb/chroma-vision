'use strict';


//global variables

const testSequence = [];
let testIndex = 0;
let maxLength = 5;

//user score
let score = 0;

console.log('hello world');


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

// show results button
let showResults = document.createElement('show-results');






//Test Constructor
function Tester(name, answer, fileExtension = 'jpeg') {
  this.name = name;
  this.src = `../img/${name}.${fileExtension}`;
  this.answer = answer;
  testSequence.push(this);

}

// let retreivedData = localStorage.getItem('scores');
// if (retreivedData) {
//   let parsedData = JSON.parse(retreivedData);



// }

// // New User Constructor
// function NewUser(name) {
//   this.name = name;

//   //results from taking test
//   this.results = results;
// }


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
new Tester('test-13', 5);







// function to render images
function renderImages() {

  imageTest.src = testSequence[testIndex].src;
  imageTest.alt = testSequence[testIndex].name;

}






//Event handlers


//Event handler for start test button
function handleStartTest(e) {

  renderImages();

  //console.log('i am here first');

  startTest.innerHTML = '';

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


  submitbutton.setAttribute('type', 'submit');

  form.appendChild(submitbutton);


}


// Event Handler
function handleSubmit(e) {
  e.preventDefault();
  //console.log(e.target.answer);

  let correctAnswer = +e.target.answer.value;

  //console.log(correctAnswer);

  if (correctAnswer === testSequence[testIndex].answer) {
    score++;
  }
  console.log(score);
  testIndex++;

  if (testIndex === maxLength) {
    form.innerHTML = '';
    let a = document.createElement('a');
    a.setAttribute('href', 'result.html');
    a.textContent = 'Show Results';
    myContainer.appendChild(a);
    let stringifiedData = JSON.stringify(score);
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

