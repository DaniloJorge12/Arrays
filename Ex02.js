//Crie um array com 4 músicas que você ama e mostre uma por uma com for .

let playlist = ['Its my life', 'Sweet drems and dancing', 'La isla bonita', 'Numb']
let quantidade = playlist.length
console.log('Quantidade de músicas: '+ quantidade)
console.log('--------------------------------------')

for(let i = 0; i < quantidade; i++){
    console.log(playlist[i])
}