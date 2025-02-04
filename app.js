//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function exibirTextoNaTela(tag, texto) {
    // Crie um elemento HTML com o tag especificado.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

const inputAmigo = document.getElementById('amigo');
let listaDeAmigos = [];
//let ultimoIndex = listaDeAmigos.length-1;

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
      const amigo = listaDeAmigos[i];
      const item = document.createElement('li');
        //Essa linha cria um novo elemento HTML do tipo <li> (item de lista).
      item.textContent = amigo;
        //Essa linha define o texto do novo item de lista como o nome do amigo.
        // A propriedade textContent define ou obtém o texto de um elemento.
        // A variável amigo contém o nome do amigo atual.
      lista.appendChild(item);
      //Essa linha adiciona o novo item de lista à lista de amigos.
      //O método appendChild() adiciona um novo filho a um elemento.
      //A variável lista é o elemento <ul> que representa a lista de amigos. VEJA NO HTML A TAG <ul></ul>
      //O novo item de lista (item) é adicionado como um filho da lista de amigos.

    }
}

function adicionarAmigo(){
    const nome = (inputAmigo.value).trim();
    //Essa linha recupera o valor do campo de texto do inputAmigo.
    // O método trim() remove espaços em branco do início e do fim de uma.
    if(nome != ""){
        listaDeAmigos.push(nome);  
        //Essa linha adiciona o nome do amigo à lista de amigos.
        // O método push() adiciona um ou mais elementos ao final de um array.
        atualizarLista();
        //Essa linha atualiza a lista de amigos.
        inputAmigo.value = ""; // Limpa o campo de texto do inputAmigo.
    } else {
        alert("Por favor, digite o nome de alguem!");
    }      
}

//let ultimoIndex = listaDeAmigos.length-1;

function sortearAmigo(){
    const sorteado = listaDeAmigos[parseInt(Math.floor(Math.random() * listaDeAmigos.length))];
    //Essa linha sorteia um amigo da lista de amigos.
    // O método Math.floor() arredonda um número para baixo.
    // O método Math.random() gera um número aleatório entre 0 (inclusive)
    // e 1 (exclusive).
    alert("O sorteado foi: " + sorteado);
//Essa linha exibe uma mensagem de alerta com o nome do amigo sorteado.
}

function sortearAmigo2() {
    const sorteado = listaDeAmigos[parseInt(Math.floor(Math.random() * listaDeAmigos.length))];
    const resultado = document.getElementById('resultado');
    const item = document.createElement('li');
    item.textContent = 'O sorteado foi: ' + sorteado;
    resultado.appendChild(item);

    responsiveVoice.speak('O sorteado foi: ' + sorteado, 'Portuguese Female');
        //essa linha fala o nome do sorteado.

    
}//essa função sorteia um amigo da lista de amigos e adiciona o resultado a uma lista
