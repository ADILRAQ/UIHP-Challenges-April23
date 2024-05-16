/** Write your code below */

// Variable to store data form the input element
let post = '';

// Object that will store input node
const jsInput = document.querySelector('input');

// Object that will store div node
const jsDiv = document.querySelector('div');

// function that will called at each change at the input
function handleInput() {
    post = jsInput.value;
    jsDiv.textContent = post;    
}

// Add the handleInput function as a callback function at the oninput event
jsInput.oninput = handleInput;