
// importando o cliente service que tem a função de passar os parametros para criar cliente
import { clienteService } from "../service/cliente-service.js";

// acessando o elemento do formulário que tem o data-form no cadastra_cliente.html
const formulario = document.querySelector('[data-form]');

// criando um evendo de envio quando eu clicar no formulário
formulario.addEventListener('submit', (event) => {

    // prevenir o evento de enviar antes de checar o valor que tem no formulário
    event.preventDefault();

    // passei o parametro de event para pegar apenas o elemento do evento, ao invés do documento inteiro
    // abaixo, pega o valor de cada atributo dentro do evento de formulário que tem os data-atributs
    const nome = event.target.querySelector('[data-nome]').value
    const email = event.target.querySelector('[data-email]').value

    clienteService.criaClientes(nome, email)
    .then(() => {
        window.location.href = "../telas/cadastro_concluido.html";
    })

})