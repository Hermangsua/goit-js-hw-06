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
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");
decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});
incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.counterValue;
});
