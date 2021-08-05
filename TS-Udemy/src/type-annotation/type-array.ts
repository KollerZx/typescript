//Array<T>
//T[]

export function multiplicaArgs(...args: Array<number>){
    return args.reduce((acc, valor) => acc * valor, 1)
}
export function concatenaStrings(...args: string[]){
    return args.reduce((acc, valor) => acc + valor)
}
export function upperCase(...args: string[]): string[]{
    return args.map(valor => valor.toUpperCase())
}
const resultado = multiplicaArgs(1, 2, 3)
const concatena = concatenaStrings('a','b','c')
const upper = upperCase('a','b','c')
console.log(resultado)
console.log(concatena)
console.log(upper)
