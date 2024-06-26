// main.js
const topText = document.getElementById("top-text")
const subText = document.getElementById("sub-text")
const lowText = document.getElementById("low-text")
const goBtn = document.getElementById("go-button")
const nextBtn = document.getElementById("next-button")
const resetBtn = document.getElementById("reset-button")
const bootstrapIcons = document.getElementById("bootstrap-icons")
const symbol = document.getElementById("symbol")
goBtn.addEventListener("click", () => { 
  screen = screen + 1
  screenChange()
}) 
nextBtn.addEventListener("click", () => {
    screen = screen + 1
    screenChange()
})
resetBtn.addEventListener("click", () => {
    screen = 1
    screenChange()
})


let screen = 1

function screenChange() {

    switch (screen){
        case 1:
            topText.textContent = "I can read your mind"
            nextBtn.classList.add("d-none")
            resetBtn.classList.add("d-none")
            goBtn.classList.remove("d-none")
            lowText.classList.add("d-none")
            subText.classList.add("d-none")
            topText.classList.remove("d-none")
            bootstrapIcons.classList.add("d-none")
            break;
        
        case 2: 
            topText.textContent = "Pick a number between 0-99"
            lowText.textContent = "When you have your number click next"
            lowText.classList.remove("d-none")
            nextBtn.classList.remove("d-none")
            goBtn.classList.add("d-none")
            break;
        
        case 3:
            topText.textContent = "Add both digits together to get a new number" 
            subText.textContent = "Ex. 14 is 1 + 4 = 5"
            subText.classList.remove("d-none")
            lowText.textContent = "Click next to proceed"
            lowText.classList.remove("d-none")
            goBtn.classList.add("d-none")
            break;

        case 4:
            topText.textContent = "Subtract your new number from the original number"
            subText.textContent = "Ex. 14 - 5 = 9"
            lowText.textContent = "Click next to proceed"
            break;

        case 5:
            subText.textContent = "Find your new number"
            lowText.textContent = "Note the symbol beside the number"
            resetBtn.classList.remove("d-none")
            topText.classList.add("d-none")
            bootstrapIcons.classList.remove("d-none")
            break;

        case 6:
            const iconHTML = '<i class="bi bi-coin h3"></i>';
            topText.innerHTML = `Your symbol is...${iconHTML}`
            bootstrapIcons.classList.add("d-none")
            subText.classList.add("d-none")
            lowText.classList.add("d-none")
            topText.classList.remove("d-none")
            break;
            

    }

}
    
screenChange()


// function init(){
    
//   }
  
//   init()