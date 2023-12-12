

const rank = calcularRank(86, 5);
const classificacao = classificarHeroi();
console.log(exibirMensagem())

function calcularRank(vitorias, derrotas){
  return vitorias - derrotas;
}

function classificarHeroi() { 
  if(rank > 0 && rank <= 10) return "Ferro"; 
  else if(rank > 10 && rank <= 20) return "Bronze";
  else if(rank > 20 && rank <= 50) return "Prata";
  else if(rank > 50 && rank <= 80) return "Ouro";
  else if(rank > 80 && rank <= 90) return "Diamante";
  else if(rank > 90 && rank <= 100) return "Lendário";
  else if(rank > 100) return "Irmotal";
  else return "O Heroi ainda não rankeou!";
  
}

function exibirMensagem(){
  if(rank > 0) return `O Heroi tem saldo de ${rank} vitórias e está no nivel: ${classificacao}`;
  else return classificacao;

}
