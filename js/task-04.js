const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
console.log(decrementBtn);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
console.log(incrementBtn);
const valueEl = document.querySelector("#value");
console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});
incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.counterValue;
});
