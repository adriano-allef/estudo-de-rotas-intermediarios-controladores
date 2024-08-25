import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import { buscarUsuario, buscarUsuarioQuery, itemProdutos } from './controladores'
import { intermediarioGeral, meuPrimeiroIntermediario } from './intermediarios'

const servidor = express()

servidor.use(intermediarioGeral)

servidor.get('/produtos/:item', meuPrimeiroIntermediario, itemProdutos)

servidor.get('/usuarios/:email', buscarUsuario)

servidor.use(intermediarioGeral)

servidor.get('/usuarios', buscarUsuarioQuery)

servidor.listen(process.env.PORT)