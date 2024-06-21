import { Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import db from '../config/db'
import { AuthRequest } from '../shared/types'

export const authenticate = async (
   req: AuthRequest,
   res: Response,
   next: NextFunction
) => {
   try {
      const token = req.headers.authorization?.split(' ')?.[1]

      if (!token) {
         res.status(401).send('Token not provided')
         return
      }

      const decoded = jwt.verify(
         token,
         process.env.JWT_ACCESS_SECRET!
      ) as JwtPayload

      const user = await db.user.findUnique({
         where: {
            id: decoded.id,
         },
      })

      if (!user) {
         return next(new Error('User not found'))
      }

      req.user = user

      next()
   } catch (error: any) {
      res.status(401).send('Unauthorized')
   }
}
