const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const nomes = ["Daniel", "Gabriel", "Thiago", "Leonardo", "Pedro", "Fernando", "Marco", "Gleica", "Yudi", "Wesley", "Renan", 
               "Francisco", "Wallace", "Mauro", "Henrique", "Luiz", "Antônio", "Lucas", "Igor", "David", "Alvaro", "José", "João", "Paulo", "Denilson"];
const index_maximo = nomes.length - 1; 
const index_aleatorio = between(0,index_maximo);
const sql = `INSERT INTO people(name) values('${nomes[index_aleatorio]}')`
connection.query(sql)

var texto = '<h1>Full Cycle</h1><br><table><tr><th>Id</th><th>Name</th></tr>'

connection.query('select * from people', (err, results) => {
    results.forEach(element => {
        texto = texto+`<tr><td>${element.id}</td><td>${element.name}</td></tr>`
    });
    
    console.log(results)
    console.log(texto)
  })

connection.end()

app.get('/', (req,res)=>{
    res.send(`${texto}</table>`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta '+port)
})

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }