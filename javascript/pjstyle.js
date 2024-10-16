function format(command, value = null) {
    document.execCommand(command, false, value);
}

const editor = document.querySelector('.editor');
const charCounter = document.querySelector('.char-counter');
const maxChars = 1000;

editor.addEventListener('input', () => {
  const textLength = editor.innerText.length;
  charCounter.textContent = `${textLength}/${maxChars}`;

  if (textLength > maxChars) {
      editor.innerText = editor.innerText.slice(0, maxChars);
      charCounter.textContent = `${maxChars}/${maxChars}`; 
  }
});

function saveContent() {
    const content = editor.innerHTML;
    console.log('Saved Content: ', content);
    alert('Content saved! Check the console for the output.');
}

  //check if editor is empty
  function checkPlaceholder() {
    if (editor.innerHTML.trim() === '') {
      editor.classList.add('empty');
    } else {
      editor.classList.remove('empty');
    }
  }

  checkPlaceholder();

  editor.addEventListener('input', checkPlaceholder);