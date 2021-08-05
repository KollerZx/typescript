
//Aqui ocorre inferência de tipos nas propriedades do objeto
const Objeto = {
    chaveA: 'Valor A',
    chaveB:'Valor B'
}
//permitido
Objeto.chaveA = 'Valor C'

//Não permitido, pois não existe no tipo inferido inicialmente pelo typescript
//Objeto.chaveC = 'Nova chave'

//Formas não recomendas para tipar objetos

//const ObjetoB:object = {}
//const ObjetoB:{} = {}

/*
Dessa forma é permitido criar novas chaves, porém, o typescript não reconhece mais o tipo das propriedades internas,
não exibindo as opçoes de propriedades
const ObjetoB:Record<string, unknown> = {
    chaveA: 'Valor A',
    chaveB:'Valor B'
}

ObjetoB.chaveC = 'nova chave'
*/

// Caso se precise criar um objeto que possa ser extendido, pode-se usar essa notação de tipagem
const ObjetoC:{
    readonly chaveA: string
    chaveB:string
    chaveC?:string
    [key: string]: unknown //index signature
} = {
    chaveA: 'Valor A',
    chaveB:'Valor B'
}

//não poderá mais ser sobrescrita devido ao paramêtro readonly
//ObjetoC.chaveA = 'novo valor A'

ObjetoC.chaveC = 'nova chave C'
ObjetoC.chaveD = 'nova chave D'

console.log(ObjetoC)
