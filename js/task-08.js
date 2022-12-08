const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const obj = {
    email: mail,
    password: password,
  };
  if (mail === "" || password === "") {
    alert("Some input are empty");
  } else {
    console.log(obj);
  }
  event.currentTarget.reset();
}
