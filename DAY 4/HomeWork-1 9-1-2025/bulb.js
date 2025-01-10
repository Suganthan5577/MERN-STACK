const bulb = document.getElementById('bulb');
const button = document.getElementById('toggleButton');

let isBulbOn = false;

button.addEventListener('click', () => {
  isBulbOn = !isBulbOn;
  if (isBulbOn) {
    bulb.src = 'data:image/jpeg;base64,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';
    button.textContent = 'Turn Off';
  } else {
    bulb.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Clear_light_bulb.jpg';
    button.textContent = 'Turn On';
  }
});