// console.log("this is prpject 4");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;
// console.log(username, email, phone);

username.addEventListener("blur", () => {
  let regex = /^[a-zA-Z][0-9a-zA-Z]{0,10}$/;
  let str = username.value;
  if (regex.test(str)) {
    username.classList.remove("is-invalid");
    validUser = true;
  } else {
    username.classList.add("is-invalid");
    validUser = false;
  }
});
email.addEventListener("blur", () => {
  let regex = /^(\w+)\@(\w+)\.([a-zA-Z]+)$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    console.log("correct email");
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
    console.log("incorrect email");
    validEmail = false;
  }
});
phone.addEventListener("blur", () => {
  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  if (regex.test(str)) {
    console.log("correct phone");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("incorrect phone");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("form submitted");
  //sumbit your form
  if (validEmail && validPhone && validUser) {
    console.log("all entries valid");
    let success = document.getElementById("success");
    success.classList.add("show");
    success.style.display = "block";
    failure.style.display = "none";
    failure.classList.remove("show");
  } else {
    console.log("one or more invalid entries");
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    failure.style.display = "block";
    success.style.display = "none";
    success.classList.remove("show");
  }
});
