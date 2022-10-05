const container =document.getElementById('container')

const colors = ['#ff0000','#a800ff','#009cff','#00ff1e','#f0ff00','#pink','#00ffc0']
const SQUARES = 500

for(i=0; i<SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>{
        setColor(square)
    }) 
    square.addEventListener('mouseover',()=>{
        removeColor(square)
    })
    container.appendChild(square)
    
}
function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.background = '#0000;'
    element.style.boxShadow = '0 0 2px #000;'
} 
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

