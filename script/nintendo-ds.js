




//nintendo
const nintendo = document.querySelector("#body")

//setas
const setaUp = document.querySelector(".fa-angle-up")
const setaRight = document.querySelector(".fa-angle-right")
const setaLeft = document.querySelector(".fa-angle-left")
const setaDown = document.querySelector(".fa-angle-down")

//botoes
const blueBtn = document.getElementById('blue-btn')
const greenBtn = document.getElementById('green-btn')
const redBtn = document.getElementById('red-btn')
const yellowBtn = document.getElementById('yellow-btn')

//start e select
const start = document.getElementById('start-btn')
const select = document.getElementById('select-btn')
const home = document.getElementById('home-btn')
//telas
const telaCima = document.getElementById('top-screen')
const telaBaixo = document.getElementById('bottom-screen')

//input de cor
const color = document.querySelector("#color")

//alto-falantes
const altoEsquerdo = document.getElementById('right-speaker')

//sound-track
const audio = document.getElementById('sound-track')

//luz de ativação
const luz = document.getElementById('light-3')

//============== Eventos ==============

//evento que liga a tela
home.addEventListener('click', () => {
    telaCima.classList.toggle('off')
    telaBaixo.classList.toggle('off')

//  volume audio padrão 
    audio.volume = .2
//se a tela de cima tiver a classe 'off' o audio pause senao ele toca
    if (telaCima.classList.contains('off')) {
        audio.pause()
        audio.currentTime = 0

        imgPokemon.style.display = 'none'
        nomePokemon.style.display = 'none'
        luz.style.background = '#7a7e7d'

        telaCima.style.background = "url('/conteudo/imgs/foto-pag-inicial.jpg')"
        telaBaixo.style.background = "url('/conteudo/imgs/gif-pikachu.gif')"

        telaCima.style.backgroundSize = 'cover'
        telaBaixo.style.backgroundSize = 'cover'

    } else {
        audio.play()
        luz.style.background = 'green'
    }    
})

//evento que inicia a api
start.addEventListener('click', () => {
    if (!telaCima.classList.contains('off')) {
        
        imgPokemon.style.display = 'block'
        nomePokemon.style.display = 'block'

        telaCima.style.background = "url('../conteudo/imgs/pixelArtTelaCima.gif')"
        telaCima.style.backgroundSize = 'cover'
        
        telaBaixo.style.background = "none"
        telaBaixo.style.background = 'linear-gradient(150deg, black, white)'
        telaBaixo.style.backgroundSize = 'cover'

        exibirPokemon("1");
    }
})

//evento que troca as cores do nintendo
color.addEventListener("input", () => {
    nintendo.style.background = color.value
})

//evento de clique na seta pra cima
setaUp.addEventListener('click', () => {
    aumentarVolume()
})

//evento de clique na seta pra direita
setaRight.addEventListener('click', () => {
   proxPokemon()
})

//evento de clique na seta pra baixo
setaDown.addEventListener('click', () => {
    diminuirVolume()
})

//evento de clique na seta pra esquerda
setaLeft.addEventListener('click', () => {
    prevPokemon()
})

//================ Funções ================ 
//função que aumenta o volume
function aumentarVolume() {
    audio.volume += 0.1
}

//função que diminui o volume
function diminuirVolume() {
    audio.volume -= 0.1
}