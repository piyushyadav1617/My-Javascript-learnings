let elem = document.createElement("p");
elem.class = "date";
document.body.appendChild(elem);

// let date = new Date();
setInterval(() => {
    let date = new Date();
    elem.innerHTML = date.toLocaleTimeString();
}, 1000)



