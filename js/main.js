'use strict'

<<<<<<< HEAD
import { getContatos, getContatosPorNome, postContato } from "./contato.js";
import { uploadImageToAzure } from "./uploadImageToAzure.js"; // Corrigido para importar do arquivo correto
=======
import { getContatos, getContatosPorNome, postContato } from './contato.js'
>>>>>>> f739e92225be5bce82e3368b31a13f356b495251

async function handleUploadImage() {
    const uploadParams = {
        file: document.getElementById('foto').files[0],
        storageAccount: 'tutorialuploadgabriel',
        sasToken: 'sp=racwl&st=2025-05-15T12:28:18Z&se=2025-05-15T20:28:18Z&sv=2024-11-04&sr=c&sig=FV%2Bs%2FkeD2g3CRuaoy%2FD7Q10Hq7ENNTgEh%2FkPOPJH0D0%3D',
        containerName: 'fotos',
    };

    await uploadImageToAzure(uploadParams);
}

function criarCard (contato) {
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

async function exibirContatos () {
    const container = document.getElementById('container')
    const contatos = await getContatos()
    container.replaceChildren()
    contatos.forEach(criarCard)
}
<<<<<<< HEAD

async function exibirPesquisa (evento) {
    const container = document.getElementById('container')
    if (evento.key == 'Enter') {
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
=======
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

async function salvarContato () {
    const contato = {
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco": document.getElementById('endereco').value,
            "cidade": document.getElementById('cidade').value
    }

    if (await postContato(contato)){
        await alert('Cadastro realizado com sucesso!!!')
        exibirContatos()
        voltarHome()
>>>>>>> f739e92225be5bce82e3368b31a13f356b495251
    }
    
}

function cadastroContato () {
    document.querySelector('main').className = 'form-show'
}

function voltarHome () {
    document.querySelector('main').className = 'card-show'
}
async function salvarContato () {
    const contato = {
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco": document.getElementById('endereco').value,
            "cidade": document.getElementById('cidade').value
        }

        if (await postContato(contato)){
            await exibirContatos()
            voltarHome()
            alert ('Cadastro realizado com sucesso!!!')
        }
        
}

exibirContatos()

document.getElementById('pesquisar')
<<<<<<< HEAD
        .addEventListener('keydown',exibirPesquisa)

document.getElementById('novo-contato')
        .addEventListener('click', cadastroContato)

document.getElementById('cancelar')
        .addEventListener('click', voltarHome)

document.getElementById('salvar')
        .addEventListener('click', salvarContato)
=======
    .addEventListener('keydown', exibirPesquisa)

document.getElementById('button-contato')
    .addEventListener('click', cadastroContato)

document.getElementById('cancelar')
    .addEventListener('click', voltarHome)

document.getElementById('salvar')
    .addEventListener('click', salvarContato)

document.getElementById
>>>>>>> f739e92225be5bce82e3368b31a13f356b495251
