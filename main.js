// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// function maioridade (...numeros) {
//     let count = 0
//     for (let i = 0; i < numeros.length; i++) {
//         count += numeros[i]
//     }

//     if (numeros >= 18) {
//         return true
//     } else {
//         return false
//     }
// }
// let user;

// while (true) {
//   user = parseInt(prompt("Insira sua idade"));

//   if (!isNaN(user)) { 
//     if (maioridade(user)) { 
//       console.log("Você pode dirigir!");
//     } else {
//       console.log("Você não pode dirigir!");
//     }

//     break;
//   } else {
//     alert("O valor inserido não foi um número. Favor inserir um número.");
//   }
// }


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno = prompt("Qual turno você estuda?\nMatiturno: M\nVespertino: V\nNoturno: N")

// if (turno.toUpperCase() === "M") {
//     console.log("Bom dia!");
// } else if (turno.toUpperCase() === "V") {
//     console.log("Boa tarde!");
// } else if (turno.toUpperCase() === "N") {
//     console.log("Boa noite!");
// } else {
//     alert("Resposta inválida!");
// }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turno = prompt("Qual turno você estuda?\nMatiturno: M\nVespertino: V\nNoturno: N")

// switch (turno) {
//     case "M":
//         console.log("Bom dia!");
//         break
//     case "V":
//         console.log("Boa tarde!");
//         break
//     case "N":
//         console.log("Boa noite!");
//         break
//     default:
//         console.log("Resposta inválida!")
// } 

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let cinema = {
//     genero: prompt("Qual o gênero do filme?"),
//     valor: parseFloat(prompt("Qual o valor do ingresso para o filme, em reais?"))
// }

// if (cinema.genero. toLowerCase() === "fantasia" && cinema.valor < 15.00) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// let cinema = {
//     genero: prompt("Qual o gênero do filme?"),
//     valor: parseFloat(prompt("Qual o valor do ingresso para o filme, em reais?"))
// }

// if (cinema.genero. toLowerCase() === "fantasia" && cinema.valor < 15.00) {
//     let lanche = prompt("Qual lanche desejas comprar?")
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu (a sua) ${lanche}!`)
// } else {
//     console.log("Escolha outro filme :(")
// }