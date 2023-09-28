if(localStorage.getItem("acesso") === "false"){
    window.location.href = "../index.html"
}


const imgPokemon = document.getElementById("imgPokemon");
const nomePokemon = document.getElementById("nomePokemon");
const pokemonAltura = document.getElementById('pokemon_altura');
const pokemonPeso = document.getElementById('pokemon_peso');

const bottomScreen = document.getElementById("bottom-screen")
const infoTelaBaixo = document.getElementById('infoTelaBaixo');

const tipoIcon = document.querySelector('.tipoIcon');
const pesquisaPokemon = document.getElementById("pesquisaPokemon")


const coresTeste = {
    normal: 'rgba(168, 167, 122,',
    fire: 'rgba(238, 129, 48,',
    water: 'rgba(99, 144, 240,',
    electric: 'rgba(247, 208, 2,',
    grass: 'rgba(122, 199, 76,',
    ice: 'rgba(150, 217, 214,',
    fighting: 'rgba(194, 46, 2,',
    poison: 'rgba(163, 62, 161,',
    ground: 'rgba(226, 191, 101,',
    flying: 'rgba(169, 143, 243,',
    psychic: 'rgba(249, 85, 135,',
    bug: 'rgba(166, 185, 26,',
    rock: 'rgba(182, 161, 54,',
    ghost: 'rgba(115, 87, 151,',
    dragon: 'rgba(111, 53, 252,',
    dark: 'rgba(112, 87, 70,',
    steel: 'rgba(183, 183, 206,',
    fairy: 'rgba(214, 133, 161,'
}

let idPokemonBuscado = 1
 HEAD
// consultaPokemon se torna uma variavel assincrona, logo em seguida conceta o api e casso o api status seja igual 200(significa ok) caso seja ele usa o JSON para aliemntar a variavel data.

let versao = []


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
        
        nomePokemon.innerHTML = `<h2 id="nmPokemon" style="margin-top: 10px">#${data.id}  - ${data.name}</h2>`;
        
        versao[0] = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default'];

// seta o tipo do pokeon nas variaveis tp1 ou em caso de dois tipos em tp1 e tp2
        let tipos = data.types.map(tp =>tp.type.name)

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



        versao[1] = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_shiny'];

        versao[2] = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['back_default'];

        
        versao[3] = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['back_shiny'];
        
        imgPokemon.src = versao[0] 

        let tipos = data.types.map(tp =>tp.type.name)
        const cor = coresTeste[tipos[0]]  
        
        if(tipos.length > 1){
            tipos = `${tipos[0]} / ${tipos[1]}`

        }

        tipoIcon.style.backgroundColor = `${cor} 0.8)`
        tipoIcon.style.boxShadow = `0 0 19px ${cor} 1)`
        bottomScreen.style.boxShadow = `inset 0 0 20px ${cor} 0.7)`
        //bottomScreen.style.border = `2px solid ${cor} 1)`
        //bottomScreen.style.borderTop = "none"

        //style = "background: black; border-radius: 40%; padding: 10px"
        // Seta na tela debaixo o peso a altura e o tipo de pokemon 

        bottomScreen.style.backgroundImage = `linear-gradient(to bottom, ${cor} 0.1), ${cor} 0.6)), url(../conteudo/imgs/backgroundBottonScreen.jpg)`

        infoTelaBaixo.innerHTML =  `
            <div id="infoPokemon" style="  display: flex; justify-content: space-around; width: 100%">
                <div> 
                    <p class="infoPokemonTeste"> Peso</p> 
                    <h3 class="type"> ${data.weight/10} kg </h3>
                </div>
                <div> 
                    <p class="infoPokemonTeste"> Altura</p> 
                    <h3 class="type"> ${data.height/10} m</h3>
                </div> 
            </div >

            <div style="margin-top: 20px"> 
                <p class="infoPokemonTeste"> Tipo:</p> 
                <h3 class="type">${tipos}</h3>
            </div>
        `
        idPokemonBuscado = data.id
    }   
}


// funçao que acrescenta +1 no id do ultimop pokemon que foi pesquisado ou o pokemon inicial e caso de id maior que 649 ele retorna ao primeiro id



function exibirPokemonVersoes(shiny, costas) {
        
    if (shiny && costas) {
        imgPokemon.src = versao[3]    
    } else if (!shiny && costas) {
        imgPokemon.src = versao[2]    
    } else if (shiny && !costas) {
        imgPokemon.src = versao[1]
    } else {
        imgPokemon.src = versao[0]
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
}
