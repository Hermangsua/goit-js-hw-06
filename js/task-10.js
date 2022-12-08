const inputField = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestr = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBoxes = (amount) => {
  const elementsAdd = [];
  for (let index = 0; index < amount; index++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * index}px`;
    div.style.width = `${30 + 10 * index}px`;
    div.style.background = getRandomHexColor();
    elementsAdd.push(div);
  }
  return elementsAdd;
};
btnCreate.addEventListener("click", () => {
  const numberOfBoxesToCreate = createBoxes(inputField.value);
  boxes.append(...numberOfBoxesToCreate);
});
const destroyBoxes = () => {
  boxes.innerHTML = "";
};
btnDestr.addEventListener("click", () => {
  destroyBoxes();
});
