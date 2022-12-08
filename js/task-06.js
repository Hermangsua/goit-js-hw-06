const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", () => {
  console.log(textInput.getAttribute("data-length"));
  console.log(textInput.value.length);
  if (textInput.getAttribute("data-length") == textInput.value.length) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
