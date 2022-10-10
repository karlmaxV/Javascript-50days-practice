const boxesContainer =document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>boxesContainer.classList.toggle('big'))
createBoxes()
function createBoxes(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            const box =document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}