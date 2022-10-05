const toggles =document.querySelectorAll('.toggle')
const good =document.querySelector('#good')
const cheap =document.querySelector('#cheap')
const fast =document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change',(e) => doTrick(e.target)))
function doTrick(clickedOne){
    if (good.checked){
        if(cheap.checked){
            if(fast.checked){
                if(good === clickedOne){
                    fast.checked = false
                }if(cheap === clickedOne){
                    good.checked = false
                }if(fast === clickedOne){
                    cheap.checked = false
                }
            }
        }
    }
}