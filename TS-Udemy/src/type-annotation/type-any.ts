
/* Nesse caso sera inferido o tipo 'any', para o argumento e retorno da função
** Usar any somente em ultimo caso
*/
function showMessage(msg){
    return msg
}
console.log(showMessage([1,2,3]))
console.log(showMessage('ola'))
console.log(showMessage(1))
