import { Request, Response } from "express"

const pessoas = [
    {nome: 'Adriano', email: 'adriano@email.com'},
    {nome: 'João', email: 'joao@email.com'},
    {nome: 'Maria', email: 'maria@email.com'}, 
]

export const itemProdutos = (req: Request, res: Response) => {
    console.log(req.params)
    return res.send('Cheguei no controlador')
}

export const buscarUsuario = (req: Request, res: Response) => {
    const { email } = req.params

    const pessoa = pessoas.find((item) =>{
        return item.email === email
    } )

    if (!pessoa){
        return res.send('Pessoa não encontrada!')
    }

    return res.send(pessoa)
} 

export const buscarUsuarioQuery = (req: Request, res: Response) => {
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
}
