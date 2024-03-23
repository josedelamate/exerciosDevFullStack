const url = "https://jsonplaceholder.typicode.com/users/";

//  criar uma função asincrona para executar a url acima [callAPI]
// criar uma função que sera usada como callbackfunction para montar o html no retorno da função acima [renderDataToHtml]

const renderDataToHtml = (jasonData) => {
    console.log(jasonData)
    
    return jasonData.map(function(data) {
        let li = createNode('li');   
        let span = createNode('span');    
        span.innerHTML = `Nome: ${data.name} => ${data.username}`;
        append(li, span);
        append(ul, li);
    })
}
const callAPI = async (renderCallBack) => {
    try {
        let response = await fetch(url)
        //console.log(response)
        let data = await response.json()
        //console.log(data)   
        renderCallBack(data)     
    } catch (err) {
        console.log('erro: '+err)
    }
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('usuarios');

callAPI(renderDataToHtml)
