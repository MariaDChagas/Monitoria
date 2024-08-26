const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    resultado2 = ''
    response.render('monitoria2')
})

app.post('/end', (request, response) => {
    resultado2 = `Seja bem-vindo ${request.body.nome}!` 
    response.render('monitoria2')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("rodano =D")
})
