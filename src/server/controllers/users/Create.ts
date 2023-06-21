import { Request, Response, json } from 'express'

interface IUser {
  nome: string
}

export const create = (req: Request<{}, {}, IUser>, res: Response) => {
  const data = { nome: req.body.nome }
  return res.send(data)
}
