// let username;
// username = window.prompt(`what's your name?`);
// console.log(username);

let username;

document.getElementById(`mysubmit`).onclick = () =>  {
    username = document.getElementById(`mytext`).value;
    document.getElementById(`heading`).textContent = `Welcome ${username}`;
}

let radius;
const PI = 3.14159;
let circumference;

document.getElementById(`Submit-btn`).onclick = () => {
    radius = document.getElementById(`myinput`).value;
    circumference = 2 * PI * radius;
    document.getElementById(`h3`).textContent = circumference;
}