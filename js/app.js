'use strict';


//global variables

const testSequence = [];

console.log('hellow world');


//Window to DOM
let myContainer = document.getElementById('container');

//accessing Dom images
let imageTest = document.getElementById('image-test');

//shows next Button
let nextButton = document.getElementById('image-submit');





//Test Constructor
function Tester(name, answer, fileExtension = 'jpeg') {
  this.name = name;
  this.src = `../img/${name}.${fileExtension}`;
  this.answer = answer
  testSequence.push(this.src);

}






// New User Constructor
function NewUser(name) {
  this.name = name;

  //results from taking test
  this.results = results;
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
new Tester('test-13', 5);







// function to render images
function renderImages() {
}





//Event handlers



//Event Listeners
