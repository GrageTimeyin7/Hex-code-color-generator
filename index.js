const colorCodeSystem = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const firstContainer = document.getElementById('containerOne')
const firstContainerText = document.getElementById('containerTextOne')

const secondContainer = document.getElementById('containerTwo')
const secondContainerText = document.getElementById('containerTextTwo')

const thirdContainer = document.getElementById('containerThree')
const thirdContainerText = document.getElementById('containerTextThree')

const button = document.getElementById('button')

function randomNumber(){
    let number = Math.floor( Math.random() * colorCodeSystem.length)
    return number
}

button.addEventListener('click', function(){
    let firstHex = '#'
    let secondHex = '#'
    let thirdHex = '#'
    
    // First Loop for Container One
    for(let firstLoop = 0; firstLoop < 6; firstLoop++){
        firstHex += colorCodeSystem[randomNumber()]
        }
        firstContainer.style.backgroundColor = firstHex
        firstContainerText.textContent = firstHex
        firstContainerText.style.color = 'white'

        // Second Loop for Container Two
        for(let secondLoop = 0; secondLoop < 6; secondLoop++){
            secondHex += colorCodeSystem[randomNumber()]
        }
        secondContainer.style.backgroundColor = secondHex
        secondContainerText.textContent = secondHex
        secondContainerText.style.color = 'white'

        for(let thirdLoop = 0; thirdLoop < 6; thirdLoop++){
            thirdHex += colorCodeSystem[randomNumber()]
        }
        thirdContainer.style.backgroundColor = thirdHex
        thirdContainerText.textContent = thirdHex
        thirdContainerText.style.color = 'white'
})