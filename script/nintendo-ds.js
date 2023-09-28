
//============== variaveis ==============

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
const formTelaBaixo = document.getElementById('formTelaBaixo')

//input de cor
const color = document.getElementById("color")

//alto-falantes
const altoEsquerdo = document.getElementById('right-speaker')

//sound-track
const audio = document.getElementById('sound-track')

//luz de ativação
const luz = document.getElementById('light-3')

//botao de sair
const btnX = document.querySelector('.fa-x')

//menu
const menu = document.getElementById('menu')

//icon para abrir menu
const btnIcon = document.getElementById('btn-icon')

//informacoes do pokemon
const infoPokemon = document.getElementById('infoTelaBaixo')

//tipo do pokemon
const tipoPokemon = document.querySelector(".tipoIcon")

//quadro de avatares
const avatarOptions = document.getElementById('avatar-options')

//avatar atual
const avatarAtual = document.getElementById('avatar')
const nomeUsuario = document.getElementById('nameUser')

//opções de avatares
const avatarMasculino = document.getElementById('avatarMale')
const avatarFeminino = document.getElementById('avatarFemale')

let volumeAtual = 2

//============== Eventos ==============

//evento que liga a tela
home.addEventListener('click', () => {
    telaCima.classList.toggle('off')
    telaBaixo.classList.toggle('off')

//  volume audio padrão 
    audio.volume = .2
//se a tela de cima tiver a classe 'off' o audio pause senao ele toca
    if (telaCima.classList.contains('off')) {
        //para e reseta a musica
        audio.pause()
        audio.currentTime = 0

        //esconde todas as informações
        imgPokemon.style.display = 'none'
        nomePokemon.style.display = 'none'
        infoPokemon.style.display = 'none'
        tipoPokemon.style.display = 'none'
        
        luz.style.background = '#7a7e7d'

        pesquisaPokemon.style.visibility = 'hidden'

        telaCima.style.background = "url('/conteudo/imgs/foto-pag-inicial.jpg') center"
        telaBaixo.style.background = "url('/conteudo/imgs/gif-pikachu.gif') center "

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
        //faz aparecer as tela de cima e de baixo
        imgPokemon.style.display = 'block'
        nomePokemon.style.display = 'block'
        tipoIcon.style.display = 'block'
        infoPokemon.style.display = 'block'
        tipoPokemon.style.display = 'block'

        //define a nova imagem de cima e de baixo
        telaCima.style.background = "url('../conteudo/imgs/pixelArtTelaCima.gif')"
        telaCima.style.backgroundSize = 'cover'
        
        //telaBaixo.style.background = 'linear-gradient(150deg, black, white)'
        telaBaixo.style.background = 'linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27))'
        telaBaixo.style.backgroundSize = 'cover'

        //telaBaixo.style.border = "2px solid red"
        telaBaixo.style.boxShadow = "inset 0 0 10px black"
        //mostrar a pesquisa e os stats
        pesquisaPokemon.style.visibility = 'visible'

        exibirPokemon("1");
    }
})

//evento que abre as opcoes de avatar
avatarAtual.addEventListener('click', () => {
    avatarOptions.classList.toggle('open')
})

//evento que troca o avatar para masculino
avatarMasculino.addEventListener('click', () => {
    avatarAtual.style.background = 'white url(../conteudo/imgs/avatar-masculino.webp)'
    avatarAtual.style.backgroundSize = 'cover'

    avatarOptions.classList.toggle('open')
})

//evento que troca o avatar para feminino
avatarFeminino.addEventListener('click', () => {
    avatarAtual.style.background = 'white url(../conteudo/imgs/avatar-feminino01.webp)'
    avatarAtual.style.backgroundSize = 'cover'

    avatarOptions.classList.toggle('open')
})

//input de pesquisa
formTelaBaixo.addEventListener("submit", (event) => {
    event.preventDefault()
    
    exibirPokemon(pesquisaPokemon.value)
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

//evento que fecha o menu
btnX.addEventListener('click', () => {
    menu.classList.remove('open')
    avatarOptions.classList.remove('open')
})

//evento que abre o menu
btnIcon.addEventListener('click', () => {
    menu.classList.add('open')
})

//================ Funções ================ 

buscarNomeUsuario()

//função que aumenta o volume
function aumentarVolume() {
    
    // a verificação vai de 0 até 10
    if (volumeAtual < 10) {

        volumeAtual++
        // e volume vai de 0 até 1, por isso é precisa dividir por 10
        let volumeCorrigido = (volumeAtual /10)
        
        audio.volume = volumeCorrigido
    }
}

//função que diminui o volume
function diminuirVolume() {

    if(volumeAtual > 0) {
        
        volumeAtual--
        let volumeCorrigido = (volumeAtual/10)
        audio.volume = volumeCorrigido
    }
}

//recebe o nome da pessoa
function buscarNomeUsuario() {
    const usuarioLogado = localStorage.getItem("usuarioLogado")

    nomeUsuario.innerHTML = usuarioLogado
}