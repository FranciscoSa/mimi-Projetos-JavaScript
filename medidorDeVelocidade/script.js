//Chamando função verificação
pontos = verificarVelocidade(130);
//Exibindo retorno
console.log(pontos);
//função responsavel por fazer as validações de velocidade 
function verificarVelocidade (velocidadeAtual){
    
    //Constantes
    const maxVelocidade = 70; //Guarda a velocidade maxima 
    const razaoPontos = 5;//Guarda a razão do calculo de pontos
    
    //Variaveis
    let pontos; //Responsavel por guardar o calculo do numero de pontos na carteira
    
    //Validando se o condutor esta dentro do limite permitido
    if (velocidadeAtual <=maxVelocidade){
        return ("ok");
    }
    //Calculando quantos pontos o condutor vai levar na carteira
    pontos = Math.floor((velocidadeAtual - maxVelocidade) / razaoPontos);
    //validando se o condutor esta acima do limite maximo da infracão resultando da carteira suspensa.
    if (pontos >= 12){
        return ("Carteira suspensa");
    }
    //exibindo quantos pontos ele levou na carteira
    return("Pontos : " + pontos);
    
}