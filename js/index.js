function exercicio1(){
/*Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.*/

    let idadeMotorista = Number.parseInt(prompt('Digite a idade do motorista:'));

    if(idadeMotorista>=18){
    console.log(`Pode dirigir.`);
    }else{
    console.log(`Não pode dirigir.`);
    }

}

function exercicio2(){
    /*Para o mesmo exercício acima insira mais uma variável a
    condicional, além de saber se o motorista tem 18 anos ou mais,
    temos que saber também se ele é habilitado para dirigir. Caso ele
    tenha idade maior ou igual a 18 anos e possua habilitação, insira no
    html “Pode dirigir” caso contrário imprima “Não pode dirigir”.*/

    let idadeMotorista = Number.parseInt(prompt('Digite a idade do motorista:'));

    let habilitacao = confirm('Ele possui habilitação? Clique "ok" para confirmar, "cancelar" para "não".');

    if(idadeMotorista>=18&&habilitacao){
    console.log(`Pode dirigir.`);
    }else{
    console.log(`Não pode dirigir.`);
    }
}

function exercicio3(){
/*Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.*/

    let numero = Number.parseInt(prompt('Digite um número de 1 a 7:'));

    if(numero===1){
    console.log('O dia da semana correspondente ao número digitado é domingo.')
    }else if(numero===2){
    console.log('O dia da semana correspondente ao número digitado é segunda-feira.')
    }else if(numero===3){
    console.log('O dia da semana correspondente ao número digitado é terça-feira.')
    }else if(numero===4){
    console.log('O dia da semana correspondente ao número digitado é quarta-feira.')
    }else if(numero===5){
    console.log('O dia da semana correspondente ao número digitado é quinta-feira.')
    }else if(numero===6){
    console.log('O dia da semana correspondente ao número digitado é sexta-feira.')
    }else if(numero===7){
    console.log('O dia da semana correspondente ao número digitado é sábado.')
    }else{
    console.log('Dia não reconhecido.');
    }
}

function exercicio4(){
    /*Reescreva o exercício 3, utilizando apenas o SWITCH.*/
    let numero = prompt('Digite um número de 1 a 7:');

    switch(numero){
        case "1":
            console.log('O dia da semana correspondente ao número digitado é domingo.');
            break;
        
        case "2":
            console.log('O dia da semana correspondente ao número digitado é segunda-feira.');
            break;

        case "3":
            console.log('O dia da semana correspondente ao número digitado é terça-feira.');
            break;

        case "4":
            console.log('O dia da semana correspondente ao número digitado é quarta-feira.');
            break;
            
        case "5":
            console.log('O dia da semana correspondente ao número digitado é quinta-feira.');
            break;
    
        case "6":
            console.log('O dia da semana correspondente ao número digitado é sexta-feira.');
            break;

        case "7":
            console.log('O dia da semana correspondente ao número digitado é sábado.');
            break;
    
        default:
            console.log("Dia não reconhecido.");
    }
}

function exercicio5(){

/*Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares.*/

    for(let i=10;i>=1;i--){
        if(i%2===0){
            console.log(`${i} `);
        }
    }

}

function exercicio6(){

/*Insira no html 30 ( trinta ) números ímpares.*/
    
    let num = 1;

    for(let i=30;i>=1;i--){
        document.write(`${num} `);
        num+=2;
    }
}


function exercicio7(){
    
/*Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.*/

    let inicio = 10;
    let soma = 0;

    do{
        soma+=inicio;
        inicio++;
    }while(inicio<=100);

    document.write(`${soma}`);
}


function exercicio8(){
    
/*Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR".*/

   let salario = Number.parseFloat(prompt("Insira o valor do salário:"));
   
   if(salario<1903.98){
        document.write("Isento de IR.");
   }else{
        document.write("Tributado no IR.");
   }
}

function exercicio9(){

/*Informe um valor a uma variável e imprima no console se o número
é primo.*/

    let variavel = Number.parseInt(prompt("Informe um número inteiro: "));

    let isPrimo = true;

    for(let i = variavel-1;i>=2;i--){
        if(variavel%i==0){
            isPrimo = false;
            break;
        }
    }

    if(isPrimo&&variavel!==0&&variavel!==1){
        console.log(`O número ${variavel} é primo.`);
    }else if(isPrimo&&variavel===0||variavel===1){
        console.log(`O número ${variavel} não é primo.`);
    }else{
        console.log(`O número ${variavel} não é primo.`);
    }
    
}

function exercicio10(){
/*Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7*/

    let sexo = Number.parseInt(prompt('Digite "1" para sexo masculino e "2" para sexo feminino.'));

    let altura = Number.parseFloat(prompt("Digite sua altura: "));

    if(sexo===1){
        let peso_ideal = (72.7 * altura) - 58;
        console.log(`O seu peso ideal é ${peso_ideal.toFixed(2)}.`);
    }else if(sexo===2){
        let peso_ideal = (62.1 * altura) - 44.7;
        console.log(`O seu peso ideal é ${peso_ideal.toFixed(2)}.`);
    }else{
        console.log(`Opção inválida.`);
    }

}

function exercicio11(){
/*Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso.*/

    let turno = prompt('Digite o turno em que você estuda. "M" para matutino,"V" para vespertino e "N" para noturno:');

    switch(turno){
        case "M":
            alert("Bom dia!");
            break;

        case "V":
            alert("Boa tarde.");
            break;

        case "N":
            alert("Boa noite.");
            break;

        default:
            alert("Valor inválido.");
    }

}

function exercicio12(){
/*Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&).*/

    let idadeDoador = Number.parseInt(prompt("Digite a idade do doador: "));

    if(idadeDoador>=18&&idadeDoador<=67){
        alert('Você pode doar sangue!');
    }else if(idadeDoador<18||idadeDoador>67){
        alert('Você não pode doar sangue!');
    }else{
        alert('Opção inválida.');
    }
}

function exercicio13(){
/*Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.*/

    let numero = Number.parseInt(prompt('Digite um número inteiro: '));

    for(let i=numero;i>=0;i--){
        if(i%2===1){
            console.log(numero);
        }
    }
}

function exercicio14(){
/*Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor*/

    let numero = Number.parseFloat(prompt('Digite um número.'));

    while(numero<=500){
        numero = numero*3;
    }
    
    document.write(`O último valor é ${numero}.`);
}

function exercicio15(){
/*Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. Verifique se os lados fornecidos formam realmente um triângulo. Se formar, deve mostrar no console o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C);*/

    


}

function exercicio16(){
/*Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

    let anoAtual = Number.parseInt(prompt('Digite o ano atual.'));

    let anoNascimento = Number.parseInt(prompt('Digite o seu ano de nascimento.'));

    let idade = anoAtual-anoNascimento;

    if(idade>=16){
        console.log('Você poderá votar este ano.');
    }else if(idade>0&&idade<16){
        console.log('Você não poderá votar este ano.');
    }else{
        console.log('Digite um valor de idade maior que 0.');
    }
}

function exercicio17(){
/*Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.*/

    let eleitores = Number.parseInt(prompt('Digite o número de eleitores do município.'));

    let brancos = Number.parseInt(prompt('Digite o número de votos brancos'));

    let nulos = Number.parseInt(prompt('Digite o número de votos nulos.'));

    let validos = Number.parseInt(prompt('Digite o número de votos válidos.'));

    let somaVotos = brancos + nulos + validos;

    let percentualBrancos = (100*brancos)/eleitores;

    let percentualNulos = (100*nulos)/eleitores; 

    let percentualValidos = (100*validos)/eleitores;

    if(somaVotos<=eleitores){
    console.log(`O percentual de votos brancos é ${percentualBrancos}% do total.`);
    console.log(`O percentual de votos nulos é ${percentualNulos}% do total.`);
    console.log(`O percentual de votos válidos é ${percentualValidos}% do total.`);
    }else{
    console.log(`A soma dos votos computados é maior que o número total de eleitores. Insira o número correto de votos.`);
    }  

}

function exercicio18(){
/*Uma loja de eletrodomésticos estabeleceu as seguintes modalidades de pagamento para a venda de suas mercadorias:

À vista: desconto de 2,5% sobre o preço de tabela.
De 2 a 5 vezes: preço de tabela, sem desconto ou acréscimo.
De 6 a 10 vezes: juros de 6% sobre o preço da tabela.
De 11 até 15 vezes: juros de 13% sobre o preço de tabela.

Escreva um algoritmo que armazene o preço de tabela e o número de vezes em que o pagamento será feito. Calcule o valor de cada parcela e o preço total da compra e imprima no console.*/

    let price = Number.parseFloat(prompt("Digite o preço de tabela do produto"));

    let parcel = Number.parseInt(prompt("Digite o número de parcelas de 1 a 15"));

    if(parcel===1){
    price = price - (0.025*price);
    alert(`O valor com desconto à vista é R$${price.toFixed(2)}.`);
    }else if(parcel>=2&&parcel<=5){
    alert(`O valor parcelado em 2 a 5 vezes, sem desconto, é R$${price.toFixed(2)}.`);
    }else if(parcel>=6&&parcel<=10){
    price = price + (0.06*price);
    alert(`O valor parcelado em 6 a 10 vezes, com juros, é R$${price.toFixed(2)}.`);
    }else if(parcel>=11&&parcel<=15){
    price = price + (0.13*price);
    alert(`O valor parcelado em 11 a 15 vezes, com juros, é R$${price.toFixed(2)}.`);
    }else{
    alert('Valor inválido. Digite um número de parcelas de 1 a 15.');
    }
}