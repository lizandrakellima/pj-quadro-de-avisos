// importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')

const moment = require('moment')

// importando as rotas do Aviso
const routerAvisos = require('./components/avisos/AvisosController')

// inicializando o express 
const app = express()

// configurar a view engine e configura a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

moment.locale("pt-br")
app.locals.moment = moment

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// rotas 
app.use(routerAvisos)

// escutar a porta
app.listen(3000)
