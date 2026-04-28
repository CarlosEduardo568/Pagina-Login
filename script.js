const bntMostrarSenha = document.querySelector("#checkbox-mostrar-senha")
const campoSenha = document.querySelector(".senha")

bntMostrarSenha.addEventListener("change", () => {
    campoSenha.type = bntMostrarSenha.checked ? "text" : "password"
});

