function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.body;
console.log(bodyEl);
const btnChangeColor = document.querySelector(".change-color");
console.log(btnChangeColor);
btnChangeColor.addEventListener("click", () => {
  // console.log(getRandomHexColor());
  let hexColor = getRandomHexColor();
  console.log(hexColor);
  bodyEl.style.backgroundColor = hexColor;
  document.querySelector(".color").textContent = hexColor;
});
