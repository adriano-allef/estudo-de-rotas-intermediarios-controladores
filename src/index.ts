import 'dotenv/config'
import express from 'express'
import { buscarUsuario, buscarUsuarioQuery, itemProdutos } from './controladores'

const servidor = express()

servidor.get('/produtos/:item', itemProdutos)


servidor.get('/usuarios/:email', buscarUsuario)

servidor.get('/usuarios', buscarUsuarioQuery)

servidor.listen(process.env.PORT)