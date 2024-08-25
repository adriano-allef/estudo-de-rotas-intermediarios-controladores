import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import { buscarUsuario, buscarUsuarioQuery, itemProdutos } from './controladores'

const servidor = express()

const meuPrimeiroIntermediario = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo intermediario')

    if (req.params.item === 'sair') {
        return res.send('A requisição foi respondida no intermediario, antes de chegar no controlador')
    }

    next()
}

servidor.get('/produtos/:item', meuPrimeiroIntermediario, itemProdutos)


servidor.get('/usuarios/:email', buscarUsuario)

servidor.get('/usuarios', buscarUsuarioQuery)

servidor.listen(process.env.PORT)