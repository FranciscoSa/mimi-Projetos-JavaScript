//Chamando função para taratar par ou impar
parOuImpar(10);

//Função par  ou impar rece um numero como parametro e testa se os valores são par ou impar
function parOuImpar(numero){
    //loop com o numero fornecido como atributo
    for (let i = 0; i <= numero; i++){
        //Testando se o valor é par pelo resto da divisão    
        if ( ( i % 2 ) === 0 ){
            i != 0 ? console.log(i + " PAR ") : null; // Valida se o contador esta na posição 0 e imprime na tela par 
        }else{
            console.log(i + " IMPAR "); // Imprime quando o numero é impar.
        }
    
    }
}