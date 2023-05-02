/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

// Criação de variável atribuindo a ela um array
let items = [];

// Laço de repetição utilizando o for()
for(let item = 0; item < 10; item++){
    let itemsName = prompt("Digite o item: " + (item + 1))

    // Array recebendo um novo dado e guardando na sequencia da variável item
    items[item] = itemsName
}

alert(items);