// console.log("this is prpject 4");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// console.log(username, email, phone);

username.addEventListener("blur", () => {
  let regex = /(^[a-zA-Z][0-9a-zA-Z]{0,10})/;
  let str = username.value;
  if (regex.test(str)) {
    console.log("username is valid!");
  } else console.log("Invalid username");
});
email.addEventListener("blur", () => {});
phone.addEventListener("blur", () => {});
