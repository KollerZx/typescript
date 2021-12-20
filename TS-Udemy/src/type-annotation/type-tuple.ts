// Tuples
const dadosCliente:[number, string] = [1, 'Henrique']
const dadosCliente2:[number,string,string] = [2, 'João', 'Kleber']
//                                   string || undefined
const dadosCliente3:[number, string, string?] = [3, 'Felipe']
const dadosCliente4:[number, string, ...string[]] = [4, 'Carlos', 'Ricardo']

dadosCliente[0] = 100
//Não permitido
//dadosCliente[1] = 100
dadosCliente[1] = 'Koller'
console.log(dadosCliente)
console.log(dadosCliente2)
console.log(dadosCliente3)


// O codig abaixo cria uma divergência, pois o typescript não identifica o pop, para que a tupla se torne imutavel após sua declaração
//insere-se 'readonly'
const dados:[number, string] = [15, 'Julio']
dados.pop()
console.log(dados)

const dadosImutaveis: readonly [number, string] = [20, 'Hulk']

//Agora não sera mais possivel utilizar o metodo pop, e nem atribuir novos valores
//dadosImutaveis.pop();
//dadosImutaveis[0] = 50

//readonly array
const array1: readonly string[] = ['Henrique', 'Koller']
const array2: ReadonlyArray<string> = ['Henrique', 'Koller']

console.log(array1)
