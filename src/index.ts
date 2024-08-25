import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/produtos/:item', (req, res) => {
    console.log(req.params)
    return res.send('O nodemon está configurado com o typescript')
} )

const pessoas = [
    {nome: 'Adriano', email: 'adriano@email.com'},
    {nome: 'João', email: 'joao@email.com'},
    {nome: 'Maria', email: 'maria@email.com'}, 
]

servidor.get('/usuarios/:email', (req, res) => {
    const { email } = req.params

    const pessoa = pessoas.find((item) =>{
        return item.email === email
    } )

    if (!pessoa){
        return res.send('Pessoa não encontrada!')
    }

    return res.send(pessoa)
} )

servidor.get('/usuarios', (req, res) => {
    const { email } = req.query

    if (!email) {
        return res.send('parametro não informado')
    }


    console.log(req.query)
    const pessoa = pessoas.find((item) =>{
        return item.email === email
    } )

    if (!pessoa) {
        return res.send('Pessoa não encontrada!')
    }

    return res.send('OK')
} )

servidor.listen(process.env.PORT)