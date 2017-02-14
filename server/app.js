const path = require('path')
const express = require('express')

const app = express()
const port = (process.env.PORT || 8080)

const indexPath = path.join(__dirname, '../src/index.html')
const filesPath = express.static(path.join(__dirname, '../build/'))
const publicPath= express.static(path.join(__dirname, '../public/'))

app.use('/', filesPath)
app.use('/', publicPath)
app.get('/', function (_, res) { res.sendFile(indexPath) })

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
