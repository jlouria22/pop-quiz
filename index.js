let score = 0;

// question 1
const selectioninput = prompt(`What is 1 + 1
    [1] 5
    [2] 4
    [3] 2`);

const selection = Number(selectioninput);

if (Number.isNaN(selection)) {
  alert("You must enter a number.");
} else if (selection < 1 || selection > 3) {
  alert("Your number must be 1, 2, or 3.");
}

if (selection === 3) {
  score = score + 1;
  alert(`Correct! Score: [${score}]`);
} else {
  alert("wrong");
}

// question 2
const selectioninput2 = prompt(`what is 9 + 10
  [1] 12
  [2] 19
  [3] 200`);

const selection2 = Number(selectioninput2);

if (Number.isNaN(selection2)) {
  alert("You must enter a number.");
} else if (selection2 < 1 || selection2 > 3) {
  alert("Your number must be 1, 2, or 3.");
}

if (selection2 === 2) {
  score = score + 1;
  alert(`correct! Score: [${score}] `);
} else {
  alert(`Wrong`);
}

// question 3
const selectioninput3 = prompt(`what is 5 - 7
  [1] -2
  [2] 2
  [3] -4`);

const selection3 = Number(selectioninput3);

if (Number.isNaN(selection3)) {
  alert(`you must enter a number.`);
} else if (selection3 < 1 || selection3 > 3) {
  alert(`your number must be be 1, 2, or 3`);
}

if (selection3 === 1) {
  score = score + 1;
  alert(`correct! Score: [${score}]`);
} else {
  alert(`wrong`);
}

if (score === 0) {
  alert(`user got 0 questions right. study more`);
} else if (score === 1 || score === 2) {
  alert(`user got some answers right. close, study more`);
} else if (score === 3) {
  alert(`user got all questions right. good job!`);
}
