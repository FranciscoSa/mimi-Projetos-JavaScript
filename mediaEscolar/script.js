//Variveis
let notas = [100,0,0]; //Array de notas

//chamando função para processar as notas
let media = mediaEscolar(notas);

//Exibindo médeias no console
console.log(media);

//função para calcular a média
function mediaEscolar(notas){
    
    //variaveis
    let media = 0; //Guarda a media
    
    //Varrendo array de notas passado como atributo
    for (indice in notas){
        media += notas[indice]; // Adiconando as notas a variavel média
    }
    //Calculando média com base na soma das notas e na quantidade de notas passadas.
    media = media / (notas.length); 

    //Testando valor das notas para dar o retorno adequando.
    if (media > 0 && media <= 59){
        return 'F';
    }
    else if (media > 59 && media <= 69){
        return 'D';
    }
    else if (media > 69 && media <= 79){
        return 'C';
    }
    else if (media > 79 && media <= 89){
        return 'B';
    }  
    else if (media > 89 && media <= 100){
        return 'A';
    }
    else{
        //Validando medias invalidas para dar o retorno adequado.
        if (media < 0){
            return 'Média invalida, menor que 0.';
        }else if (media > 100){
            return 'Média invalida, maior que 100.';
        }
    }
}