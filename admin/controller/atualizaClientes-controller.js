import { clienteService } from "../service/cliente-service.js";





    // pega a URL local
    const pegaURL = new URL(window.location);
    console.log(pegaURL)

    // parametro get que é criado pelo new URL, nesse caso, peguei o id passado na query parametro
    const id = pegaURL.searchParams.get("id")

    const inputNome = document.querySelector("[data-nome]")
    const inputEmail = document.querySelector("[data-email]")


     clienteService.detalhaCliente(id)
        .then(dados => {

            // preencheu o valor do html pela API de acordo com o queryparametro da pegaURL
            inputNome.value = dados.nome
            inputEmail.value = dados.email
        })
            
    


    const formulario = document.querySelector("[data-form]")

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault()

        await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)

        window.location.href = "../telas/edicao_concluida.html"

    })
