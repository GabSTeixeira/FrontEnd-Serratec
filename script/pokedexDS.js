

if(localStorage.getItem("acesso") === "false"){
    window.location.href = "../index.html"
}

const imgPokemon = document.getElementById("imgPokemon");
const nomePokemon = document.getElementById("nomePokemon");

const pesquisaPokemon = document.getElementById("pesquisaPokemon")
const bottomScreen = document.getElementById("bottom-screen")
const infoTelaBaixo = document.getElementById('infoTelaBaixo');

const tipoIcon = document.querySelector('.tipoIcon');

const pokemonAltura = document.getElementById('pokemon_altura');
const pokemonPeso = document.getElementById('pokemon_peso');

const coresTeste = {
    fire: 'rgb(255, 69, 0)', // Laranja para Fire
    grass: '#4CAF50',        // Verde para Grass
    electric: '#FFD700',     // Amarelo para Electric
    water: '#70ffea',        // Azul-água para Water
    ground: '#8B4513',       // Marrom-escuro para Ground
    rock: '#A9A9A9',         // Cinza para Rock
    fairy: '#FF69B4',        // Rosa para Fairy
    poison: '#B85EFC',       // Roxo escuro para Poison
    bug: '#94ecbe',          // Verde claro para Bug
    dragon: '#FF4500',       // Laranja para Dragon
    psychic: '#7c7db6',      // Azul-roxo para Psychic
    flying: '#F0E68C',       // Amarelo-claro para Flying
    fighting: '#696969',     // Cinza escuro para Fighting
    normal: '#D3D3D3',       // Cinza claro para Normal
    ice: '#00BFFF',          // Azul para Ice
    dark: '#4f7ecf',         // Azul-escuro para Dark
    ghost: '#483D8B',        // Azul-escuro para Ghost
    steel: '#4682B4',        // Azul para Steel
  }; 
const cores = {
    fire: 'rgba(255, 69, 0, 0.5)',          // Laranja para Fire
    grass: 'rgba(76, 175, 80, 0.5)',        // Verde para Grass
    electric: 'rgba(255, 215, 0, 0.5)',     // Amarelo para Electric
    water: 'rgba(112, 255, 234, 0.5)',      // Azul-água para Water
    ground: 'rgba(139, 69, 19, 0.5)',       // Marrom-escuro para Ground
    rock: 'rgba(169, 169, 169, 0.5)',       // Cinza para Rock
    fairy: 'rgba(255, 105, 180, 0.5)',      // Rosa para Fairy
    poison: 'rgba(184, 94, 252, 0.5)',      // Roxo escuro para Poison
    bug: 'rgba(148, 236, 190, 0.5)',        // Verde claro para Bug
    dragon: 'rgba(255, 69, 0, 0.5)',        // Laranja para Dragon
    psychic: 'rgba(124, 125, 182, 0.5)',    // Azul-roxo para Psychic
    flying: 'rgba(240, 230, 140, 0.5)',     // Amarelo-claro para Flying
    fighting: 'rgba(105, 105, 105, 0.5)',   // Cinza escuro para Fighting
    normal: 'rgba(211, 211, 211, 0.5)',     // Cinza claro para Normal
    ice: 'rgba(0, 191, 255, 0.5)',          // Azul para Ice
    dark: 'rgba(79, 126, 207, 0.5)',        // Azul-escuro para Dark
    ghost: 'rgba(72, 61, 139, 0.5)',        // Azul-escuro para Ghost
    steel: 'rgba(70, 130, 180, 0.5)'        // Azul para Steel
};

let idPokemonBuscado = 1
// consultaPokemon se torna uma variavel assincrona, logo em seguida conceta o api e casso o api status seja igual 200(significa ok) caso seja ele usa o JSON para aliemntar a variavel data.
const consultarPokemon = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(API.status == 200){
        const data = await API.json()
        return data
    }
}
// alimenta a data  com o pokemon consultado  e caso data.id seja menopr que 650 e maior que 0 ele seta o nome do pokemon o id na tela e a imagem na tela de cima do DS
const exibirPokemon = async (pokemon) =>{

    const data = await consultarPokemon(pokemon);

    if(data && data.id < 650 && data.id > 0){
        
        nomePokemon.innerHTML = `<h2 style="margin-top: 10px">#${data.id}  - ${data.name}</h2>`;
        imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default'];
// seta o tipo do pokeon nas variaveis tp1 ou em caso de dois tipos em tp1 e tp2
        let tipos = data.types.map(tp =>tp.type.name)
<<<<<<< HEAD
        let tp1 = tipos[0]
        let tp2 = tipos[1]
        const color = cores[tp1]
        const cor = coresTeste[tp1]
        console.log(tipos)
// reconhece se o pokemonm tem um ou dois tipos
        if(tipos.length != 1){
            tipos = `${tp1} / ${tp2}`
        }else{
            tipos = tp1

        
        const color = cores[tipos[0]]
        
        if(tipos.length > 1){
            tipos = `${tipos[0]} / ${tipos[1]}`
>>>>>>> trabalhoAPI/developer
        }

        tipoIcon.style.backgroundColor = `${color}`
        tipoIcon.style.boxShadow = `2px 2px 20px ${color}`
        bottomScreen.style.background = `${color}`
        bottomScreen.style.boxShadow = `inset 0 0 20px ${color}`
        //bottomScreen.style.border = `2px solid ${color}`
        //bottomScreen.style.borderTop = "none"

        //style = "background: black; border-radius: 40%; padding: 10px"
        // Seta na tela debaixo o peso a altura e o tipo de pokemon 
        infoTelaBaixo.innerHTML =  `
        <div id="infoPokemon" style="  display: flex; justify-content: space-around; width: 100%">
        <div > <p class="infoPokemonTeste"> Peso</p> <h3 class="type"> ${data.weight/10} kg </h3></div>
        <div> <p class="infoPokemonTeste"> Altura</p> <h3 class="type"> ${data.height/10} m</h3></div> 
        </div >
        <div style="margin-top: 20px"> <p class="infoPokemonTeste"> Tipo:</p> <h3 class="type">${tipos}</h3></div>
        `
        idPokemonBuscado = data.id
    }
     
}

// funçao que acrescenta +1 no id do ultimop pokemon que foi pesquisado ou o pokemon inicial e caso de id maior que 649 ele retorna ao primeiro id
function proxPokemon () {
   
    let number = parseInt(idPokemonBuscado)
    
    if (number < 649 ) {
        exibirPokemon((number + 1) + "")
    } else {
        exibirPokemon("1")
    }
    
}

function prevPokemon () {
    
    let number = parseInt(idPokemonBuscado)
    
    if (number > 1 ) {
        exibirPokemon((number - 1) + "")
    } else {
        exibirPokemon("649")
    }
    
}

function deslogar(){
    localStorage.setItem("acesso", false);
    alert('Saindo')
    return window.location.href = "../index.html"
}
