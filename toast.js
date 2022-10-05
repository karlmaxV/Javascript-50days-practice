const button = document.getElementById('button')
//const toasts = document.querySelectorAll('.toast')
const toasts = document.getElementById('toasts')

//button.addEventListener('click', ()=>toasts.classList.add(''))
const messages =[
    'message one',
    'message two',
    'message three',
    'message four',
]
const types = ['info', 'success', 'error']

button.addEventListener('click',()=> createNotification())
function createNotification(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
    //notif.innerText = type ? type : getRandomTypes()

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
}
function getRandomMessage(){
    return messages [Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
    return types [Math.floor(Math.random() * types.length)]
}