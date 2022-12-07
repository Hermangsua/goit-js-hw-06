const inputField = document.querySelector("#controls>input");
console.log(inputField);
const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);
const btnDestr = document.querySelector("button[data-destroy]");
console.log(btnDestr);
const boxes = document.querySelector("#boxes");
console.log(boxes);
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
  console.log(inputField.value);
  boxes.append(...numberOfBoxesToCreate);
});
const destroyBoxes = () => {
  boxes.innerHTML = "";
};
btnDestr.addEventListener("click", () => {
  destroyBoxes();
});
