if(localStorage.getItem("acesso") === "true"){
    alert("Você precisa deslogar para cadastrar um novo usuario!")
    window.location.href = "../paginas/pokedexDS.html"
}

function cadastrar(){
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if(senha != confirmar){
        return alert("ERRO: Senhas não coincidem!")
    }

    const usuario = {
        login: login, 
        senha: senha
    };

    if(!localStorage.usuario){
        localStorage.setItem("usuario", JSON.stringify([]));
    }

    let vetorUsuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuarioExiste(vetorUsuario, usuario.login)){
        return alert('ERRO: Usuario já cadastrado!')
    }

    vetorUsuario.push(usuario);
    localStorage.setItem("usuario", JSON.stringify(vetorUsuario));
    return alert("Cadastrado com Sucesso!");

};

function usuarioExiste(vetorUsuario, login){
    let verificador = false;
    for(let usuario of vetorUsuario){
        console.log(usuario)
        if(usuario.login === login){
            verificador = true;
        }
    }
    return verificador
};
