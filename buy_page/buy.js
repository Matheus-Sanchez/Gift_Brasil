document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        let hasError = false;

        if (nome.value.trim() === "") {
            displayErrorMessage(nome, "Por favor, preencha o campo Nome.");
            hasError = true;
        } else {
            clearErrorMessage(nome);
        }

        if (email.value.trim() === "") {
            displayErrorMessage(email, "Por favor, preencha o campo E-mail.");
            hasError = true;
        } else if (!isValidEmail(email.value.trim())) {
            displayErrorMessage(email, "Por favor, insira um E-mail válido.");
            hasError = true;
        } else {
            clearErrorMessage(email);
        }

        if (cartao.value.trim() === "") {
            displayErrorMessage(cartao, "Por favor, preencha o campo Dados do cartão.");
            hasError = true;
        } else {
            clearErrorMessage(cartao);
        }

        if (hasError) {
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        // Implemente aqui uma validação de e-mail personalizada, se necessário
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function displayErrorMessage(element, message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.textContent = message;
        element.parentNode.appendChild(errorMessage);
    }

    function clearErrorMessage(element) {
        const errorMessage = element.parentNode.querySelector(".error-message");
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});

