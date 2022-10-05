const carousel = document.querySelector('.carousel')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run,2000)

function run(){
    idx++
    changeImage()
}
function changeImage(){
    if(idx > img.length - 1){
        idx = 0
    }else if(idx < 0){
        idx = img.length - 1 
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}
function resetInterval(){
    clearInterval(interval)
     
}
rightBtn.addEventListener('click',()=>{
    idx++
    changeImage()
    resetInterval()
})
leftBtn.addEventListener('click',()=>{
    idx--
    changeImage()
    resetInterval()
})