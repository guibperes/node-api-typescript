import { Request, Response } from 'express'

import { EmailService } from '../services'

const users = [
  {
    name: 'Guilherme Beidaki Peres',
    email: 'guibperes@gmail.com'
  }
]

export async function getAll(req: Request, res: Response) {
  return res.json(users)
}

export async function create(req: Request, res: Response) {
  const emailService = new EmailService()

  emailService.sendMail({
    to: { name: 'Guilherme', email: 'guibperes@gmail.com' },
    message: { subject: 'Bem vindo ao sistema', body: 'Seja bem-vindo' }
  })

  return res.json({ ok: true })
}
