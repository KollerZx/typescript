function semRetorno(...args:string[]):void {
    console.log(args.join(' '))
}

//Como pessoa ja foi declarada globalmente, para redeclarar deve-se exporta-la ao final do código
const pessoa = {
    nome:'Henrique',
    sobrenome:'Koller',

    exibirNome():void{
        console.log(this.nome + ' ' + this.sobrenome)
    }
}
semRetorno('Henrique', 'Koller')
pessoa.exibirNome()
export {pessoa}
