// Exercício 01
//Utilize o DOM para adicionar uma função ao clique do botão.
//Ao clicar no botão, um novo item deve ser adicionado ao container.
//Por enquanto, o item não precisa de estilização.
//Ele pode ter apenas um texto, para facilitar sua visualização.

// Exercício 02
//Altere a função criada no exercício 1 para que agora o clique no botão, faça a **estilização** do novo item.

function adicionaItem(event) {
    //Criando uma nova tag no final.
    const novoItem = document.createElement("container")
    console.log(novoItem)

    //Adicionando uma nova classe.
    novoItem.classList.add("item")

    // Definindo o conteúdo de referência.
    const elementoDeReferencia = document.getElementById("container")
    console.log(elementoDeReferencia)

    // Adicionando na tela.
    elementoDeReferencia.insertAdjacentElement("beforeend", novoItem)

    //Removendo item ao ser clicado.
    novoItem.onclick = removeItem
    
}

// Exercício 03
//Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container.
//Esta função deve **remover** o elemento clicado.
// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.
function removeItem (event) {
    event.target.remove()
}