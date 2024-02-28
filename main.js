let block_popup = document.querySelector(".block-popup-content");
let block_popup_overlay = document.querySelector(".block-popup-overlay")
let closePopupButton = document.querySelector('.block-popup-close')
let blocks = document.querySelectorAll(".block")
let block_btn = document.querySelector("#block_btn")
let block_wrapper = document.querySelector(".block-wrapper")
let block_checkbox = document.querySelector('#block_checkbox')
let index = blocks[blocks.length-1].innerHTML


block_btn.addEventListener("click", () => {
    index++
    let block = document.createElement("div")
    block.classList.add("block")
    block.innerHTML = index
    block.addEventListener("click", openPopup)
    block_wrapper.appendChild(block)
})

block_checkbox.addEventListener("click", () =>{
    if(block_checkbox.checked){
        block_wrapper.classList.add("active")
    }
    else{
        block_wrapper.classList.remove("active")
    }
})

blocks.forEach((block) => {
    block.addEventListener('click', openPopup)
})

closePopupButton.addEventListener('click',() => {
    block_popup_overlay.classList.remove('active')
    block_popup.classList.remove('active')
})

document.addEventListener('click', (e) => {
    if(e.target === block_popup_overlay) {
        block_popup_overlay.classList.remove('active')
        block_popup.classList.remove('active')
    }
})


function openPopup(e){
    e.preventDefault()
    block_popup.querySelector(".block-popup-text").innerHTML = e.target.innerHTML
    block_popup_overlay.classList.add('active')
    block_popup.classList.add('active')
}