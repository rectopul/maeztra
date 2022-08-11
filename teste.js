/**
 * 1 - Crie uma função que receba um valor INTEIRO positivo,
 * e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE.
 * Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)
 */

function integerNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateSequence() {
    const numbers = [
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
    ];

    return numbers;
}

const list = generateSequence();
const listaSequencial = [1, 2, 2, 4, 5, 5, 6, 7, 8];

function checkSequence(array) {
    const checkDifference = array.slice(1).map(function (n, i) {
        return n - array[i];
    });

    console.log(`Diferenca`, checkDifference);
    const isDifference = checkDifference.every((value) => value == 1);

    return isDifference;
}

console.log(checkSequence(list));

console.log(checkSequence(listaSequencial));

/* 2 - Crie uma função que receba um array de inteiros como parâmetro e verifique 
se neste array existem números duplicados, caso exista,
retorne um novo array com os valores que se repetem.

*/

function findDuplicates(array) {
    let duplicates = array.filter(
        (item, index) => array.indexOf(item) != index
    );

    return duplicates;
}

let duplicateElements = findDuplicates(list);
console.log(`Array original: `, list);
console.log(`Duplicados: `, duplicateElements);

/**
 *
 * 3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres
 * '[', '{', '(', ')', '}', ']' e retorne se a sequência é uma sequência válida ou não.
 * Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente
 */

function createStringSequence(valid) {
    const validCharacters = ["[", "{", "(", ")", "}", "]"];

    const sequence = [
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
    ];

    const sequenceValid = [
        `{`,
        `[`,
        `(`,
        `)`,
        `(`,
        `)`,
        `{`,
        `}`,
        `[`,
        `]`,
        `]`,
        `{`,
        `}`,
        `}`,
    ];

    function checkValid(s) {
        let characters = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        let pushing = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                pushing.push(s[i]);
            } else if (pushing[pushing.length - 1] === characters[s[i]]) {
                pushing.pop();
            } else return false;
        }

        return pushing.length ? false : true;
    }

    if (valid === true)
        console.log(`\nSequencia de caracteres: `, sequenceValid);
    else console.log(`\nSequencia de caracteres: `, sequence);

    if (valid === true) return checkValid(sequenceValid);
    else return checkValid(sequence);
}

console.log(`Sequencia: `, JSON.stringify(createStringSequence(true)));

/**
 * 4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a trabalhar
 * em ano X e aposentou em ano Y. Crie uma função que receba uma matriz na seguinte estrutura
 * [[x1,y1],[x2,y2],...[xn,yn]] e calcule em qual/quais ano/anos houve mais pessoas trabalhando.
 */

function trabalho() {
    const listYear = [
        [1945, 2000],
        [1950, 2002],
        [1981, 2015],
        [1986, 2018],
        [1992, 2021],
    ];
}
