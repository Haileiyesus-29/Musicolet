import { Request, Response } from 'express'

export async function login(req: Request, res: Response) {
   res.json({ message: 'Login' })
}

export async function register(req: Request, res: Response) {
   res.json({ message: 'Register' })
}

export async function logout(req: Request, res: Response) {
   res.json({ message: 'Logout' })
}

export async function refresh(req: Request, res: Response) {
   res.json({ message: 'Refresh' })
}
