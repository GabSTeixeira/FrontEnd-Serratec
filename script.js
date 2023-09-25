const setaUp = document.querySelector(".fa-angle-up")
const setaRight = document.querySelector(".fa-angle-right")
const setaLeft = document.querySelector(".fa-angle-left")
const setaDown = document.querySelector(".fa-angle-down")

const ds = document.querySelector("#body")
const color = document.querySelector("#color")

color.addEventListener("input", () => {
    ds.style.background = color.value
})

setaUp.addEventListener('click', () => {
    alert("cima")
})

setaRight.addEventListener('click', () => {
    alert("direita")
})

setaLeft.addEventListener('click', () => {
    alert("esquerda")
})

setaDown.addEventListener('click', () => {
    alert("baixo")
})