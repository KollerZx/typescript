
/* Tipos básicos (aqui ocorre inferência de tipos)
** ou seja, não há necessidade de definir o tipo, somente caso o tipo não seja inferido e resulte no tipo 'any'
** nesse caso, deverá ser inserido o tipo
*/
let nome: string = 'Henrique'
let idade: number = 27
let adulto: boolean = true
let simbolo: symbol = Symbol('Um symbol')

//Arrays
let arrayDeNumeros : Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b','c']
let arrayDeStrings2: string[] = ['a', 'b','c']

//Objetos

let pessoa:{nome: string, idade: number, adulto?: boolean} = {
    nome:'Koller',
    idade:27
}

//Funções
function soma(x: number,y: number){
    return x + y
}

//Inferência de tipo
const result = soma(2,2)

//             |-------------Tipagem------------|
const multiply: (x: number, y: number) => number = (x,y) => x * y
