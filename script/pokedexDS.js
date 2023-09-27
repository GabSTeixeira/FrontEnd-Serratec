

if(localStorage.getItem("acesso") === "false"){
    window.location.href = "../index.html"
}

const imgPokemon = document.getElementById("imgPokemon");
const nomePokemon = document.getElementById("nomePokemon");

const pesquisaPokemon = document.getElementById("pesquisaPokemon")
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
        
        nomePokemon.innerHTML = `<h3>${data.id} - ${data.name}</h3>`;
        imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default'];
        
        idPokemonBuscado = data.id
        //for(let poder of data.stats){
    
        // const nmPoder = poder.stat.name;
        // const vlPoder = poder.base_stat

        // poderNm.innerHTML +=  `<p>${nmPoder}:</p>`;
        // poderBox.innerHTML += `<p style ="background: grey; width: ${vlPoder}%;">${vlPoder}</p>`
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
