'use strict'

// LISTA TODOS OS CONTATSOS
async function getContatos () {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

// LISTA CONTATOS POR ID
async function getContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

// FAZ O POST DE UM CONTATO
async function postContato (contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)

    return response.ok
}

// ATUALIZA AS INFORMAÇÕES DE UM CONTATO
async function putContato (contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)

    return response.ok
}

// DELETA UM CONTATO POR ID
async function deleteContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

// ARRAY PARA UTILIZAR COMO EXEMPLO
const novoContato = {
    "nome": "Gabriel Souza Costa",
    "celular": "11 8 8888-8888",
    "foto": "gabriel.png",
    "email": "souzacosta@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Osasco"
}