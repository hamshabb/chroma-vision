'use strict';

let resultText = document.getElementById('result-text');

//MVP score retrieval code
let retreivedData = localStorage.getItem('scores');
if (retreivedData) {
  let parsedData = JSON.parse(retreivedData);
  //  future-proofed local data loading-- refer to app.js for index values of additional data stored
  let loadDataArray = parsedData;
  let lastScore = loadDataArray[0];
  let testLength = loadDataArray[1];
  resultText.textContent = `On your last test, you scored ${lastScore} out of ${testLength} correct.`;

} else {
  resultText.textContent = 'Take the color-vision test from the link above to see your results here.';
}

