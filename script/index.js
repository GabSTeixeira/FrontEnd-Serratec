if (localStorage.getItem("acesso") === "true") {
    //window.open("login.html", "_self")
    window.location.href = "../paginas/ds-fechado.html"
}

function logar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(!localStorage.usuario){
        return alert('Email ou senha incorretos!')
    }

    const vetorUsuario = JSON.parse(localStorage.getItem('usuario'));
    for (let usuario of vetorUsuario) {
        if (usuario.email === email && usuario.senha === senha) {
            localStorage.setItem("acesso", true)
            return window.location.href = "../index.html";
        }
    }

    return alert('Usuario ou senha incorretos!')
}

