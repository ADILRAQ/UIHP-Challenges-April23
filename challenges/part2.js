let post;

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');
const jsBtn = document.querySelector('button');

function handleInput() {
  post = jsInput.value;
  jsDiv.textContent = post;
}

function handleClick() {
  jsInput.value = '';
}

// Extension Challenge: Submit Button
function handleClickBtn() {
  if (jsInput.value) {
    const newDiv = document.createElement('div');
    newDiv.textContent = jsDiv.textContent;
    jsDiv.textContent = jsInput.value;
    document.body.appendChild(newDiv);
  }
}

function dataToView() {
  if (post === undefined) {
    post = "What's on your mind?";
  }
  jsInput.value = post;
  jsDiv.textContent = jsInput.value;
}

jsInput.oninput = handleInput;
jsInput.onclick = handleClick;
jsBtn.onclick = handleClickBtn;

setInterval(dataToView, 15);