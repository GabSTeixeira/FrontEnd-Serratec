if(localStorage.getItem("acesso") === "false"){
    window.location.href = "../index.html"
}

function deslogar(){
    var btnDeslogar = document.getElementById("btnDeslogar")

    localStorage.setItem("acesso", false);
    alert('Saindo')
    return window.location.href = "../index.html"
}


//--------------------------------------------------------

var imgPokemon = document.getElementById("imgPokemon");
var nmPokemon = document.getElementById("nmPokemon");
var poderNm = document.getElementById("poderNm");
var poderBox = document.getElementById("poderBox");
var input = document.getElementById("searchPokemon");
var form = document.getElementById("form")

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(API.status == 200){
        const data = await API.json();
        return data
    }
}

const rederPokemon = async (pokemon) =>{
    /*
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(response => response.json())
.then(teste => {
    console.log(teste)
*/
    poderNm.innerHTML =  ``;
    poderBox.innerHTML = ``

    const data = await fetchPokemon(pokemon);

    if(data){
        console.log(data)
    nmPokemon.innerHTML = `<h1>${data.name}</h1>`;
    //id.innerHTML = `#${teste.id}`;
    imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']
    ['animated']['front_default'];
    
    for(const poder of data.stats){
       /*for(var i = 0; i < poder.stat.name.length; i++){
            console.log(poder.stat.name)
            if(poder.stat.name[i]){
                var nmPoder = "atk"
            }
        }*/
   
        var nmPoder = poder.stat.name;
        const vlPoder = poder.base_stat

        poderNm.innerHTML +=  `<p>${nmPoder}:</p>`;
        poderBox.innerHTML += `<p style ="background: grey; width: ${vlPoder}%;">${vlPoder}</p>`
    }
}else{
}
//})
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    return rederPokemon(input.value.toLowerCase());
})


rederPokemon(searchPokemon);
