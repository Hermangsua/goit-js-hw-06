function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.body;
const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  document.querySelector(".color").textContent = hexColor;
});
