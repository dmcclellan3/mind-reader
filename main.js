// main.js
let text = document.getElementById("top-text")
let stagesBtn = document.getElementById("stages-button")
stagesBtn.addEventListener("click", () => { 
  screen = screen + 1
  screenChng()
}) 
let screen = 1

function screenChng() {

    switch (screen){
        case 1:
            text.textContent = "I can read your mind"
            break;
        
        case 2: 
            text.textContent = "Pick a number between 0-99"

            break;
        
        case 3:
            text.textContent = "Add both digits together to get a new number"
            break;

        case 4:
            text.textContent = "Subtract your new number from the original number"
            break;

        case 5:
            text.textContent = ""





    }

}
    
screenChng()


function init(){
    
  }
  
  init()