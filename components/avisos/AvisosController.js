
// incluindo as rotas às determinadas páginas do site

const router = require('express').Router()

router.get('/',(req, res)=> { 
  res.send("Pag Principal")
})

router.get('/avisos',(req, res)=> { 
  res.send("Avisos Cadastrados")
})

router.get('/avisos/novo',(req, res)=> { 
  res.render('form_avisos')
})

module.exports = router