var formulario = document.querySelector(".formcontato__form");
var mensagemErro = document.querySelector(".formcontato__erro");
var botaoEnviar = document.querySelector(".formcontato__botao");

formulario.addEventListener("submit", function(event) {
    console.log("Submit event triggered"); // Verifica se o evento submit está sendo acionado

    event.preventDefault(); // Evita o envio do formulário

    var nomeInput = document.getElementById("nome");
    var emailInput = document.getElementById("email");
    var assuntoInput = document.getElementById("assunto");
    var mensagemInput = document.getElementById("mensagem");
    var nome = nomeInput.value.trim();
    var email = emailInput.value.trim();
    var assunto = assuntoInput.value.trim();
    var mensagem = mensagemInput.value.trim();
    
    mensagemErro.style.display = "none"; // Oculta a mensagem de erro inicialmente

    var erros = []; // Lista para armazenar os erros

    if (nome === "") {
        erros.push("Por favor, insira seu nome.");
    } else if (nome.length > 50) {
        erros.push("O nome deve ter no máximo 50 caracteres.");
    }
    if (email === "") {
        erros.push("Por favor, insira seu e-mail.");
    } else if (!validarEmail(email)) {
        erros.push("Por favor, insira um e-mail válido.");
    }
    if (assunto === "") {
        erros.push("Por favor, insira o assunto.");
    } else if (assunto.length > 50) {
        erros.push("O assunto deve ter no máximo 50 caracteres.");
    }
    if (mensagem === "") {
        erros.push("Por favor, digite algo no campo de mensagem!");
    } else if (mensagem.length > 300) {
        erros.push("A mensagem deve conter no máximo 300 caracteres.");
    }

    if (erros.length > 0) {
        // Se houver erros, exibe todos os erros
        exibirErros(erros);
    } else {
        // Se todos os campos forem válidos, você pode enviar o formulário
        formulario.submit(); // Envie o formulário
    }
});

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function exibirErros(erros) {
    console.log("Exibindo erros:", erros); // Verifica se a função está sendo chamada com os erros corretos
    mensagemErro.innerText = erros.join("\n"); // Exibe os erros separados por quebras de linha
    mensagemErro.style.display = "block";
}

formulario.addEventListener("input", function() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var assunto = document.getElementById("assunto").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (nome !== "" && email !== "" && assunto !== "" && mensagem !== "") {
        botaoEnviar.removeAttribute("disabled");
    } else {
        botaoEnviar.setAttribute("disabled", "disabled");
    }
});