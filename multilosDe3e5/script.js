//chamando função para processar os multiplos
let multiplos = someMultiplos(10);
//Exibindo resultado no console
console.log(multiplos);

//função para somar os multiplos de 3 e 5
function someMultiplos(limite){
    //Variaveis
    let resultado = 0; // Guarda a soma dos multilos

    //For para varer o numero passado como atributo 
    for (cont = 0; cont <= limite; cont++){
        //Validando se o numero é multiplo de 3 ou 5
        if ((cont % 3) === 0 || (cont % 5) === 0){
            resultado += cont; // Incrementando ao resultado o valor de cont 
        }
    }
    //Retornando o resultado
    return(resultado);
}