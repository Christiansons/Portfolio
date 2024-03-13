
const egg = document.getElementById("egg");
 const body = document.querySelector("body");

egg.addEventListener('click', () => {
    body.style.backgroundImage = "linear-gradient(rgb(245, 245, 245),rgb(255, 230, 0),rgb(255, 255, 255))" 
})


const karlsson = document.getElementById("event-modal")
let pressedKeys = "yo"

window.addEventListener('keypress', (event) => {
  pressedKeys += event.key;
  pressedKeys = pressedKeys.slice(-3)
  if(pressedKeys === "hej") {
    karlsson.style.display = "block"
  }
})