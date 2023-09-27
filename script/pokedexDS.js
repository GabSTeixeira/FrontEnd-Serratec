

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
    fire: 'rgb(255, 69, 0)',      // Laranja para Fire
    grass: '#4CAF50',     // Verde para Grass
    electric: '#FFD700',  // Amarelo para Electric
    water: '#70ffea',     // Azul-água para Water
    ground: '#8B4513',    // Marrom-escuro para Ground
    rock: '#A9A9A9',      // Cinza para Rock
    fairy: '#FF69B4',     // Rosa para Fairy
    poison: '#B85EFC',    // Roxo escuro para Poison
    bug: '#94ecbe',       // Verde claro para Bug
    dragon: '#FF4500',    // Laranja para Dragon
    psychic: '#7c7db6',   // Azul-roxo para Psychic
    flying: '#F0E68C',    // Amarelo-claro para Flying
    fighting: '#696969',  // Cinza escuro para Fighting
    normal: '#D3D3D3',    // Cinza claro para Normal
    ice: '#00BFFF',       // Azul para Ice
    dark: '#4f7ecf',      // Azul-escuro para Dark
    ghost: '#483D8B',     // Azul-escuro para Ghost
    steel: '#4682B4',     // Azul para Steel
  }; 
const cores = {
    fire: 'rgba(255, 69, 0, 0.5)',           // Laranja para Fire
    grass: 'rgba(76, 175, 80, 0.5)',         // Verde para Grass
    electric: 'rgba(255, 215, 0, 0.5)',      // Amarelo para Electric
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
//const poderNm = document.getElementById("poderNm");
//const poderBox = document.getElementById("poderBox");
//const input = document.getElementById("searchPokemon");
//const form = document.getElementById("form")


let idPokemonBuscado = 1

const consultarPokemon = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(API.status == 200){
        const data = await API.json()
        return data
    }
}

const exibirPokemon = async (pokemon) =>{

    //poderNm.innerHTML =  ``
    //poderBox.innerHTML = ``

    const data = await consultarPokemon(pokemon);

    if(data && data.id < 650 && data.id > 0){
        
        nomePokemon.innerHTML = `<h2 style="margin-top: 10px">#${data.id}  - ${data.name}</h2>`;
        imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default'];

        let tipos = data.types.map(tp =>tp.type.name)
        let tp1 = tipos[0]
        let tp2 = tipos[1]
        const color = cores[tp1]
        const cor = coresTeste[tp1]
        console.log(tipos)

        if(tipos.length != 1){
            tipos = `${tp1} / ${tp2}`
        }else{
            tipos = tp1
        }

        
        console.log(color)
        console.log(tipos)
        tipoIcon.style.backgroundColor = `${cor}`
        tipoIcon.style.boxShadow = `2px 2px 20px ${cor}`
        bottomScreen.style.background = `${color}`
        bottomScreen.style.boxShadow = `inset 0 0 20px ${color}`
        //bottomScreen.style.border = `2px solid ${color}`
        //bottomScreen.style.borderTop = "none"

        //style = "background: black; border-radius: 40%; padding: 10px"
        infoTelaBaixo.innerHTML =  `
            <div id="infoPokemon" style="  display: flex; justify-content: space-around; width: 100%">
            <div > <p class="infoPokemonTeste"> Peso</p> <h3 class="type"> ${data.weight/10} kg </h3></div>
            <div> <p class="infoPokemonTeste"> Altura</p> <h3 class="type"> ${data.height/10} m</h3></div> 
            </div >
            <div style="margin-top: 20px"> <p class="infoPokemonTeste"> Tipo:</p> <h3 class="type">${tipos}</h3></div>
        ` 

        //for(let poder of data.stats){
            
        // const nmPoder = poder.stat.name;
        // const vlPoder = poder.base_stat
            
        // poderNm.innerHTML +=  `<p>${nmPoder}:</p>`;
        // poderBox.innerHTML += `<p style ="background: grey; width: ${vlPoder}%;">${vlPoder}</p>`
            
            
        //---------------------------------
            

        idPokemonBuscado = data.id
    }
     
}

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
