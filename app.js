const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  msj = '<h1>Integrantes</h1>'
  
  const integrantes = [
      'Mejia Quispe Jonny Diego',
      'Choque Quispe Nelson',
      'Chipana Ramos Paul',
      'Quispe Solorzano Joel',
  ] 
  for (const e of integrantes) {
    msj +=  `<li>${e}</li>`
  }
  res.send(msj)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})