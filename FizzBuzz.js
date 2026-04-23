// Dado um número inteiro n, retorne um array de strings answer (indexado a partir de 1) onde:

// answer[i] == "FizzBuzz" se i for divisível por 3 e 5.
// answer[i] == "Fizz" se i for divisível apenas por 3.
// answer[i] == "Buzz" se i for divisível apenas por 5.
// answer[i] == i (como string) se nenhuma das condições acima for verdadeira.

const fizzbuzz = (n) =>{
    if(!Number.isInteger(n) || typeof n !== 'number' || n < 1 || n > 10**4){
        throw new Error(`Invalid value:${n}`);
    }
    const answer = [];

    for(let i = 1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            answer.push('FizzBuzz');
        }
        else if(i % 3 === 0){
            answer.push('Fizz');
        }
        else if(i % 5 === 0){
            answer.push('Buzz')
        } else{ 
            answer.push(String(i));
        }
    }
    return answer;
}

console.log(fizzbuzz(15));