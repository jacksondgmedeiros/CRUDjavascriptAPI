
// cria uma arrow function para trazer os dados
// o fetch retorna uma promise e por padrão, trás o método GET, logo, passa só a URL
const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        try{

        
        if(resposta.ok){

            // como retorno, a resposta em formato de json, já que por padrão vem texto.
            return resposta.json()
        }
        throw new Error("Não foi possível listar os clientes")
    }
    catch (err) {
        console.log(err)
        window.location.href = "../telas/erro.html"
    }
    })
}

const criaClientes = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        // JSON.stringify transforma o json em texto
        body: JSON.stringify({
            nome : nome, 
            email : email
        })
    }).then( resposta => {
        return resposta.body
    })
}

const removeCLientes = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        // como retorno, a resposta em formato de json, já que por padrão vem texto.
        return resposta.json()
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nome : nome,
            email : email
        })
    })
    .then( resposta =>{
        return resposta.json()
    })
    
}

// export deixa visivel para outros arquivos usar e coloca as funções ou variaveis dentro para usar como objeto
export const clienteService = { 
    listaClientes,
    criaClientes,
    removeCLientes,
    detalhaCliente,
    atualizaCliente
}