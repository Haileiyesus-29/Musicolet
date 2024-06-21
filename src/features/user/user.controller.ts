import { NextFunction, Request, Response } from 'express'
import { userSchema, userUpdateSchema } from '../../shared/schemas'
import db from '../../config/db'
import { formatResponse } from '../../helpers/formatResponse'
import { AuthRequest } from '../../shared/types'

export async function createUser(req: Request, res: Response) {
   const validForm = userSchema.safeParse(req.body)

   if (!validForm.success) {
      res.status(400).send(validForm.error)
      return
   }

   const user = await db.user.create({
      data: validForm.data,
      select: {
         id: true,
         email: true,
         name: true,
      },
   })

   return res.status(201).json(formatResponse(user, null, 201))
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
   const { id } = req.params
   if (!id) {
      return next(new Error('Id not provided'))
   }

   const user = await db.user.findUnique({
      where: {
         id,
      },
      select: {
         id: true,
         email: true,
         name: true,
      },
   })

   if (!user) {
      return next(new Error('User not found'))
   }

   return res.json(formatResponse(user, null, 200))
}

export async function updateUser(req: AuthRequest, res: Response) {
   const validForm = userUpdateSchema.safeParse(req.body)

   if (!validForm.success) {
      res.status(400).send(validForm.error)
      return
   }

   const user = req.user

   if (!user) {
      return res.status(401).json(formatResponse(null, 'Unauthorized', 401))
   }

   const updatedUser = await db.user.update({
      where: {
         id: user.id,
      },
      data: validForm.data,
      select: {
         id: true,
         email: true,
         name: true,
      },
   })

   return res.json(formatResponse(updatedUser, null, 200))
}

export async function deleteUser(req: AuthRequest, res: Response) {
   const user = req.user

   if (!user) {
      return res.status(401).json(formatResponse(null, 'Unauthorized', 401))
   }

   await db.user.delete({
      where: {
         id: user.id,
      },
   })

   return res.status(204)
}
