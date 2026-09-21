// js/script.js

export function inicializarFormulario() {

    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");
    const formulario = document.querySelector("#formCadastro");
    const alertaSucesso = document.querySelector(".alerta-sucesso");
    const toast = document.querySelector("#toast-sucesso");

    // Evita reinicialização duplicada
    if (!formulario || formulario.dataset.inicializado === "true") {
        return;
    }
    formulario.dataset.inicializado = "true";

    const mensagensValidacao = {
        nome: "Digite seu nome completo, com pelo menos 3 caracteres.",
        email: "Digite um e-mail válido, como exemplo@email.com.",
        cpf: "Digite o CPF completo no formato 000.000.000-00.",
        telefone: "Digite o telefone completo no formato (00) 90000-0000.",
        dataNascimento: "Informe sua data de nascimento.",
        cep: "Digite o CEP completo no formato 00000-000.",
        endereco: "Digite o nome da rua ou avenida.",
        numero: "Digite um número de endereço maior que zero.",
        cidade: "Digite o nome da sua cidade.",
        estado: "Selecione seu estado.",
        area: "Selecione uma área de interesse.",
        disponibilidade: "Selecione sua disponibilidade.",
        mensagem: "Digite pelo menos 10 caracteres sobre você."
    };

    function atualizarMensagem(campo, exibir) {
        const mensagem = campo.parentElement.querySelector(".mensagem-erro");
        if (!mensagem) return;

        const invalido = !campo.checkValidity();
        campo.classList.toggle("campo-invalido", exibir && invalido);
        campo.setAttribute("aria-invalid", exibir && invalido ? "true" : "false");
        mensagem.classList.toggle("visivel", exibir && invalido);
    }

    document.querySelectorAll(".campo input, .campo select, .campo textarea").forEach(function (campo) {
        const mensagem = document.createElement("small");
        mensagem.className = "mensagem-erro";
        mensagem.id = `${campo.id}-erro`;
        mensagem.textContent = mensagensValidacao[campo.id] || "Preencha este campo corretamente.";
        campo.parentElement.appendChild(mensagem);
        campo.setAttribute("aria-describedby", mensagem.id);

        campo.addEventListener("blur", function () {
            campo.dataset.tocado = "true";
            atualizarMensagem(campo, true);
        });

        campo.addEventListener("input", function () {
            if (campo.dataset.tocado === "true") {
                queueMicrotask(function () {
                    atualizarMensagem(campo, true);
                });
            }
        });
    });

    // Máscara CPF
    if (cpf) {
        cpf.addEventListener("input", function () {
            let valor = cpf.value.replace(/\D/g, "");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            cpf.value = valor;
        });
    }

    // Máscara Telefone
    if (telefone) {
        telefone.addEventListener("input", function () {
            let valor = telefone.value.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
            valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
            telefone.value = valor;
        });
    }

    // Máscara CEP
    if (cep) {
        cep.addEventListener("input", function () {
            let valor = cep.value.replace(/\D/g, "");
            valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
            cep.value = valor;
        });
    }

    // Submit
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        formulario.querySelectorAll(".campo input, .campo select, .campo textarea").forEach(function (campo) {
            campo.dataset.tocado = "true";
            atualizarMensagem(campo, true);
        });

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        formulario.reset();
        formulario.querySelectorAll(".campo input, .campo select, .campo textarea").forEach(function (campo) {
            campo.dataset.tocado = "false";
            atualizarMensagem(campo, false);
        });

        if (alertaSucesso) {
            alertaSucesso.hidden = false;
        }

        if (toast) {
            toast.classList.add("visivel");
        }
    });

    // Fechar toast
    if (toast) {
        const fechar = toast.querySelector(".toast-fechar");
        if (fechar) {
            fechar.addEventListener("click", function (e) {
                e.preventDefault();
                toast.classList.remove("visivel");
                window.history.replaceState(null, "", window.location.pathname + window.location.search);
            });
        }
    }
}