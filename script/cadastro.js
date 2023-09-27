
if(localStorage.getItem("acesso") === "true"){
    alert("Você precisa deslogar para cadastrar um novo usuario!")
    window.location.href = "../paginas/pokedexDS.html"
}


function cadastrar(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if(senha != confirmar){
        return alert("ERRO: Senhas não coincidem!")
    }

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    if(!localStorage.usuario){
        localStorage.setItem("usuario", JSON.stringify([]));
    }

    let vetorUsuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuarioExiste(vetorUsuario, usuario.email)){
        return alert('ERRO: Usuario já cadastrado!')
    }

    vetorUsuario.push(usuario);
    localStorage.setItem("usuario", JSON.stringify(vetorUsuario));
    alert("Cadastrado com Sucesso!");


    console.log("alouuuuuuuuuuuuuuuuuuuuuuuuuuu")
    return window.location.href = "../index.html"

};

function usuarioExiste(vetorUsuario, email){
    let verificador = false;
    for(let usuario of vetorUsuario){
        if(usuario.email === email){
            verificador = true;
        }
    }
    return verificador
};
