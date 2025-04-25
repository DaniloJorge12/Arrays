//Mostre os itens de um array de trás pra frente com um for ao contrário.

let itens = ['Relógio', 'Computador', 'Mesa']
console.log('Array de trás para frente:')
console.log('----------------------------')

for (let i = itens.length - 1; i >=0; i--){
    console.log(itens[i])
}