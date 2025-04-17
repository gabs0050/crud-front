'use strict'

async function getContatos () {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function getContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

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

const novoContato = {
    "nome": "Gabriel Souza Costa",
    "celular": "11 9 9999-9999",
    "foto": "gabrielzinho.png",
    "email": "gabrielsouzacosta@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Jandira"
}