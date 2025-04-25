//Crie um array com 3 jogos representando um ranking. Depois, crie uma
//variável chamada jogoFavorito com o nome de um jogo. Verifique se esse jogo
//está no ranking e, se estiver, mostre a posição que ele ocupa (1o, 2o ou 3o).

let jogos = ['Minecraft', 'Mortal Kombat', 'GTA V']
let jogoFavorito = ['GTA V']

let encontrado = false;

for (let i = 0; i < jogos.length; i++){
    if(jogos[1] === jogoFavorito){
        console.log(`${jogoFavorito} está no ranking na posição ${i + 1}°`);
        encontrado = true;
        break;
    }
}

if (!encontrado){
    console.log(`${jogoFavorito} não está no ranking`)
}