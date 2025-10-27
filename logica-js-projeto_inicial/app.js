alert('Boas vindas ao nosso site!');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute for diferente do numero secreto
while (chute != numeroSecreto) {
    chute = prompt ('Ecolha um número entre 1 e 10!'); 
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
       }
       tenta
 
