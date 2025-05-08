'use strict'

import { getContatos, getContatosPorNome } from './contato.js'

function criarCard(contato) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
        <img src="${contato.foto}" alt="">
        <h2>${contato.nome}</h2>
        <p>${contato.celular}</p>
    `
    container.appendChild(card)
}

async function exibirContatos() {
    const contatos = await getContatos()
    contatos.forEach(criarCard)

}
async function exibirPesquisa(evento) {
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
    }
}

function cadastroContato () {
    document.querySelector('main').className = 'form-show'
}

function voltarHome () {
    document.querySelector('main').className = 'card-show'
}

function salvasContato () {
    const contato = {
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco": document.getElementById('endereco').value,
            "cidade": document.getElementById('cidade').value
    }

    console.log(contato)
}

exibirContatos()

document.getElementById('pesquisar')
    .addEventListener('keydown', exibirPesquisa)

document.getElementById('button-contato') // Corrigi o ID aqui
    .addEventListener('click', cadastroContato)

document.getElementById('cancelar')
    .addEventListener('click', voltarHome)

document.getElementById