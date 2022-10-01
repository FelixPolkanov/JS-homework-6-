function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', eventBtnChangeColor);

function eventBtnChangeColor(event) {
  let bodyChangeColor = document.querySelector("body")
  let bodyChangeColorFunction = getRandomHexColor();
  
  bodyChangeColor.style.backgroundColor = bodyChangeColorFunction;

  const bodyColorName = document.querySelector('.color')
  bodyColorName.textContent = bodyChangeColorFunction;

}

