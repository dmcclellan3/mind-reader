// main.js
let topText = document.getElementById("top-text")
let subText = document.getElementById("sub-text")
let lowText = document.getElementById("low-text")
let stagesBtn = document.getElementById("stages-button")
let nextBtn = document.getElementById("next-button")
stagesBtn.addEventListener("click", () => { 
  screen = screen + 1
  screenChange()
}) 
nextBtn.addEventListener("click", () => {
screen = screen + 1
screenChange()
})

let screen = 1

function screenChange() {

    switch (screen){
        case 1:
            topText.textContent = "I can read your mind"
            nextBtn.classList.add("d-none")

            break;
        
        case 2: 
            topText.textContent = "Pick a number between 0-99"
            nextBtn.classList.remove("d-none")
            stagesBtn.classList.add("d-none")


            break;
        
        case 3:
            topText.textContent = "Add both digits together to get a new number" 
            subText.textContent = "Ex. 14 is 1 + 4 = 5"
            lowText.textContent = "Click next to proceed"
            stagesBtn.classList.add("d-none")
            break;

        case 4:
            topText.textContent = "Subtract your new number from the original number"
            subText.textContent = "Ex. 14 - 5 = 9"
            lowText.textContent = "Click next to proceed"
            break;

        case 5:
            subText.textContent = "Find your new number"
            lowText.textContent = "Note the symbol beside the number"





    }

}
    
screenChange()


function init(){
    
  }
  
  init()