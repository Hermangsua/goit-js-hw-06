const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  // console.dir(formElements);
  const mail = formElements.email.value;
  const password = formElements.password.value;
  console.log(mail, password);
  const obj = {
    email: mail,
    password: password,
  };
  console.log(obj);
  if (mail === "" || password === "") {
    alert("Some input are empty");
  }
  event.currentTarget.reset();
}
