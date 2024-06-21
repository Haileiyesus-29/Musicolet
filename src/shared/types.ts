import { z } from 'zod'
import { userSchema } from './schemas'
import { Request } from 'express'

const extendedUserSchema = userSchema.extend({
   id: z.string(),
})

export interface AuthRequest extends Request {
   user?: z.infer<typeof extendedUserSchema>
}
