// Given an integer x, return true if x is a palindrome, and false otherwise.

// const isPalindrome = (x) => {
//     const arrNum = [...String(Math.abs(x))].map(Number);
//     const reversedNum = [...String(Math.abs(x))].map(Number).reverse();
//     console.log(arrNum)
//     console.log(reversedNum);
    
//     for(let i = 0; i<arrNum.length; i++){
//         if(arrNum[i] !== reversedNum[i]){
//             return false;
//         }
//         return true;
//     }
// };

// console.log(isPalindrome(121));


// forma mais simples:
// const isPalindrome = (x) => {
//     const min = -(2**31);
//     const max = (2**31-1)
//     if(typeof x !== 'number' || !Number.isInteger(x) || x < min || x > max){
//         throw new Error('Invalid value');
//     }
//     const str = String(Math.abs(x));
//     const reversedArr = [...str].reverse().join('')
//     return str === reversedArr;
// }

// console.log(isPalindrome(-2147483648));


// forma sem converter em string
const isPalindrome = (x) => {
    let original = x;
    let reversed = 0;

    while(x>0){
        //pega o ultimo digito do numero ex: 123 retorna 3(na primeira iteração):
        const digit = x % 10;
        // console.log(digit);
        //pega o valor de reversed(inicialmente 0) mutiplica por 10 e adiciona o digito. Na primeira iteração será 0*10 + 3 que da 3, ja na segunda, será 3(o valor atual de reversed) * 10 + 2(valor do digito nessa iteração) que dará 32
        reversed = reversed * 10 + digit;
        //retira o ultimo numero do 'x'. Sem isso, o valor nunca iria alterar(seria 121 pra sempre) o que ocasionaria em um loop infinito.  
        x = Math.floor(x/10);
        console.log(x);
    }

    return original === reversed;
};

console.log(isPalindrome(121));
