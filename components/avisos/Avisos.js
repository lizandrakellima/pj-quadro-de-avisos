const { from } = require('../../knexfile.js')
const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data <date>, mensagem <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */

function salvar(aviso){

  return db.insert(aviso).into('avisos')
    .then( _ =>{
      return {tipo: "Sucesso ", corpo: "Aviso cadastrado com sucesso!"}
    })
    .catch(erro =>{
      return {tipo: "Erro ", corpo: "Erro: "+ erro}
    })
}//fim do salvar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou
 * uma mensagem de erro 
 */

function selecionarTodos(){
  return db.select('*').from('avisos')
    .then(avisos => {return avisos})  
    .catch(erro =>{
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}// fim do selecionarTodos

/**
 * Função que exclui um avuiso do banco de dados
 * @param {*} id Id do aviso
 */

function excluir(id){
return db.del().from('avisos').where('ID_avisos',id)

}

module.exports = {salvar, selecionarTodos, excluir}
