import { z } from 'zod'

export const userSchema = z.object({
   name: z.string().min(3).max(255),
   email: z.string().email(),
   password: z
      .string()
      .regex(
         /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/,
         'Invalid password'
      ),
})

export const musicSchema = z.object({
   title: z.string().min(3).max(255),
   artist: z.string().min(3).max(255).optional(),
   cover: z.instanceof(Blob).optional(),
   audio: z.instanceof(File),
})

export const musicUpdateSchema = z.object({
   title: z.string().min(3).max(255).optional(),
   artist: z.string().min(3).max(255).optional(),
   cover: z.instanceof(Blob).optional(),
})

export const userUpdateSchema = z.object({
   name: z.string().min(3).max(255).optional(),
   password: z
      .string()
      .regex(
         /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/,
         'Invalid password'
      )
      .optional(),
})
