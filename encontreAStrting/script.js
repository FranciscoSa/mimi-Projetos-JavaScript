//Objeto a ser analisado
const pessoa = {
    nome : 'Francisco',
    sobrenome : 'Santana',
    idade : 22,
    sexo : 'Masculino',
    altura : 1.75
}
//Chamando função para tratar objeto
acharString(pessoa)

//Função para achar strings em um objeto
function acharString(obj){
    // for para varrer o objeto e salvar o indice na variavel propiedadeAtual
    for (let propiedadeAtual in obj){
        // verificando se o typeof da propriedade atual é do tipo string
        if(typeof(obj[propiedadeAtual]) === "string"){
            console.log(propiedadeAtual +" : "+ obj[propiedadeAtual]) // Exibindo as strings
        }
    }
}