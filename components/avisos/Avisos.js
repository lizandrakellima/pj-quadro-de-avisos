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
 * Alterar um aviso no banco de dados
 * @param {object} aviso  O aviso deve estar no seguinte formato:
 * {titulo: <string>, data <date>, mensagem <string>}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
  return db('avisos').where('ID_avisos', id).update(aviso)
  .then( _ =>{
    return {tipo: "Sucesso ", corpo: "Aviso alterado com sucesso!"}
  })
  .catch(erro =>{
    return {tipo: "Erro ", corpo: "Erro: "+ erro}
  })
} // fim do editar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou
 * uma mensagem de erro 
 */

function selecionarTodos(){
  return db.select('*').from('avisos').orderBy('data', 'ASC')
    .then(avisos => {return avisos})  
    .catch(erro =>{
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}// fim do selecionarTodos


/**
 * Seleciona um aviso
 * @param {*} id ID do aviso selecionada
 * @returns {object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select().from('avisos').where('ID_avisos', id).first()
  
  .then(aviso => {return aviso})  
    .catch(erro =>{
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}// fim do selecionarAviso

/**
 * Função que exclui um avuiso do banco de dados
 * @param {*} id Id do aviso
 */

function excluir(id){
return db.del().from('avisos').where('ID_avisos', id)
}

module.exports = {salvar, selecionarTodos, selecionarAviso, editar, excluir}
