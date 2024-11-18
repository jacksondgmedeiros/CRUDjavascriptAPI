
// import é para importar os arquivos que foram marcados como export, nesse caso, está importanto o objeto clienteService e usa o que 
// está dentro desse objeto
import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) =>  { 
  const linhaNovoCliente = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoCliente.innerHTML = conteudo

//   cria um data atributo para cada linha 
  linhaNovoCliente.dataset.id = id
//   mostrar o que o dataset faz, cria um data-id com o valor
  console.log(linhaNovoCliente)
  return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]')

// escuta para pegar quando clicar na class de excluir
tabela.addEventListener("click", async (event) => {
    let botaDeletar = event.target.className == 'botao-simples botao-simples--excluir'
    if (botaDeletar) {
        try{

            // closest pega o elemento pai mais proximo desse atribui, nesse caso, é o tr criado
            const linhaCLiente = event.target.closest('[data-id]')
            let id = linhaCLiente.dataset.id
            
            // depois de passar a promise, ele remove a linha do html antes de atualizar a página. 
            await clienteService.removeCLientes(id)
            
            linhaCLiente.remove()
        }
        catch (err) {
            console.log(err)
            window.location.href = "../telas/erro.html"
        }
        
    }
})

// acessando a promise criada no outro arquivo e fazendo um foreach para cada linha de retorno

const renderizarHTML = async () => {
    try {
        const listaClientes = await clienteService.listaClientes()
    
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
    })
        
    } catch (error) {
        console.error("Erro ao obter lista de clientes", error)
    }
    
}

renderizarHTML()

