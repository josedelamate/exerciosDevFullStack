//Modelo de Layout e Documentação no GitHub => https://github.com/in100tiva/html-css-projeto01/tree/main
const produtoDG = document.querySelector('#produto')
const ul = document.querySelector('#lista')
//console.log(lista)

const enviarProduto = () => {
    const item = document.createElement('li')
    item.innerHTML = produtoDG.value
    ul.appendChild(item)
    console.log(item)
    produtoDG.value = ''
    produtoDG.focus()
}


const mudarCorBotao = () => {
    const btnEnviar = document.querySelector('#enviar')
    //btnEnviar.setAttribute('class','novo-tema')
    //btnEnviar.classList.add('novo-tema')
    btnEnviar.classList.toggle('novo-tema')
}

const mudarTema = () => {
    const body = document.body
    body.classList.toggle('dark-mode')
}

// page - eventos.html
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    alert('Você clicou no Botão !')
})

const input = document.querySelector('#meu-input')
input.addEventListener('input', (event) => {
    console.log(`Texto Digitado: ${event.target.value}`)
})


const estilo = document.querySelector('#estilo')
estilo.addEventListener('mouseover',()=> {
    estilo.innerHTML = "Olá Mundo!"
})
estilo.addEventListener('mouseout',()=> {
    estilo.innerHTML = "Até Depois Mundo!"
})

const password = document.querySelector('#password')
password.addEventListener('focusin',()=> {
    alert('Sua Senha deve ter letras e numeros e no minimo 6 caracteres')
    estilo.focus()
})
