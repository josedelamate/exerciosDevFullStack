const params = new URLSearchParams(document.location.search)
const id = params.get("userId")
const url = `https://jsonplaceholder.typicode.com/users/${id}`

const renderDataToHtml = (jasonData) => {
    console.log(jasonData)     
    data = jasonData
    let li = createNode('li');   
    let span = createNode('span');    
    span.innerHTML = `Nome: ${data.name} => ${data.username}`;
    append(li, span);
    append(ul, li);    
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

const ul = document.getElementById('usuario');

callAPI(renderDataToHtml)