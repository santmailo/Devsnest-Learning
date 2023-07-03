// this is color which will be used later to change the text
const COLOR = 'rgb(128, 128, 255)'
document.body.style.fontFamily = "sans-serif";  
window.addEventListener("keydown",colorDevsnest);
let listOfLetters = document.querySelectorAll(".letter");
function colorDevsnest(event){
  let letter = event.key.toUpperCase();
  for(let item of listOfLetters){
    let text = item.innerText.toUpperCase();
      if(text==letter){
        item.style.color = COLOR;
      }
  }

}
