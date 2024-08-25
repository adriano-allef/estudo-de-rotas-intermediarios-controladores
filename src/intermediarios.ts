import { NextFunction, Request, Response } from 'express'

export const meuPrimeiroIntermediario = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo intermediario')

    if (req.params.item === 'sair') {
        return res.send('A requisição foi respondida no intermediario, antes de chegar no controlador')
    }

    next()
}

export const intermediarioGeral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passou no intermediário geral')

    next()
}