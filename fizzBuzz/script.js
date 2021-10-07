//Chamando a função validadora e passando o valor a ser testado como atributo
fizz = fizzBuzz(15)

//Exibindo resultado no console
console.log(fizz);

//Função para validar o fizzBuzz segue as seguintes regras:
//Atributo numero for divisivel por 3 retornar "Fizz"
//Atributo numero for divisivel por 5 retornar  "Buzz"
//Atributo numero for divisivel por 3 e 5 retornar  "FizzBuzz"
//Atributo numero não for divisivel por 3 e 5 retornar o propio atributo numero
//Atributo numero não for um valor numerico valido retoner "Não é um  número !!"

function fizzBuzz(numero){
    //Validando se o valor passado como atributo é um numero valido(usando o comando typeof)
    if (typeof(numero) == "number"){
        //Verificando se o numero não é divisivel por 3 e 5 
        if ((numero % 3) != 0 && (numero % 5) != 0){
            return (numero)
        }else{
            //Verificando se o numero é divisivel por 3 e 5
            if ((numero % 3) == 0 && (numero % 5) == 0){
                return "FizzBuzz";
            }else{
                //Verificando se o numero é divisivel por 3
                if ((numero % 3) == 0){
                    return 'Fizz'        
                }
                //Se nada acima for true o numero é divisivel apenas por 5 e retorna buzz
                return 'Buzz';
            }
        }
    }else{
        return ("Não é um  número !!");
    }
}