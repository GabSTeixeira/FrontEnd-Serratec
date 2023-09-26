if (localStorage.getItem("acesso") === "true") {
    window.location.href = "../paginas/pokedexDS.html"
}

function logar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if(!localStorage.usuario){
        return alert('Usuario ou senha incorretos!')
    }

    const vetorUsuario = JSON.parse(localStorage.getItem('usuario'));
    for (let usuario of vetorUsuario) {
        if (usuario.login === login && usuario.senha === senha) {
            localStorage.setItem("acesso", true)
            alert('Logado com sucesso!');
            return window.location.href = "../index.html";
        }
    }

    return alert('Usuario ou senha incorretos!')
}

