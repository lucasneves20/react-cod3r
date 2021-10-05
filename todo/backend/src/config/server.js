const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`tudo ocorrendo como o esperado, na porta ${port}| http://localhost:${port}/`)

})

module.exports = app