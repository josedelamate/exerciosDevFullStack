const bairro = document.querySelector('#bairro');
const endereco = document.querySelector('#endereco');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const cep = document.querySelector('#cep');

prencherCampos = (dados) => {
    endereco.value = dados.logradouro
    bairro.value = dados.bairro
    cidade.value = dados.localidade
    estado.value = dados.uf
}


function isvalidCep(cep){
    return cep.length === 8& /^[0-9]+$/.test(cep)
}


function buscarEndereco() {
    if ( isvalidCep(cep.value) ) {
        const url = `https://viacep.com.br/ws/${cep.value}/json/`;
        fetch(url)
        .then((resp)=>resp.json())
        .then((dados)=>{
            /*console.log(dados)*/
            if (dados.erro){
                endereco.value = 'Endereço não localizado!'
            }else{
                prencherCampos(dados) 
            }
                  
        })
    
    }else{
        endereco.value = 'Endereço não localizado!'
    }
}

cep.addEventListener('blur', buscarEndereco)






