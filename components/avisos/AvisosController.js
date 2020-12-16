
// incluindo as rotas às determinadas páginas do site

const router = require('express').Router()

const Avisos = require('./Avisos')

router.get('/',(req, res)=> { 
  res.send("Pag Principal")
})

router.get('/avisos', async (req, res)=> { 
  //res.send("Avisos Cadastrados")

  const avisos = await Avisos.selecionarTodos()
  res.render('avisos',{avisos})
})

router.get('/avisos/novo',(req, res)=> { 
  res.render('form_avisos')
})

router.post('/avisos/novo', async (req, res)=> { 
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Avisos.salvar({titulo, data, mensagem})
  res.render('form_avisos', {msg})

})

router.get('/avisos/excluir/id', async (req, res)=> {
  const id = Number(req.params.id)
  await Avisos.excluir(id)
  res.redirect('/avisos')
})

module.exports = router
