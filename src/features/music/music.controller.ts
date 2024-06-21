import { Response } from 'express'
import { musicSchema, musicUpdateSchema } from '../../shared/schemas'
import db from '../../config/db'
import { AuthRequest } from '../../shared/types'
import { formatResponse } from '../../helpers/formatResponse'

export async function createMusic(req: AuthRequest, res: Response) {
   const user = req.user
   if (!user) {
      res.status(401).send('Unauthorized')
      return
   }

   const validBody = musicSchema.safeParse(req.body)

   if (!validBody.success) {
      res.status(400).send(validBody.error.errors)
      return
   }

   let url = crypto.randomUUID().replace(/-/g, '')
   let cover = crypto.randomUUID().replace(/-/g, '')

   const music = await db.music.create({
      data: {
         title: validBody.data.title,
         artist: validBody.data.artist,
         cover: cover,
         userId: user.id,
         url,
      },
   })

   res.status(201).json(formatResponse(music, null, 201))
}

export async function updateMusic(req: AuthRequest, res: Response) {
   const user = req.user
   if (!user) {
      res.status(401).send('Unauthorized')
      return
   }

   const validBody = musicUpdateSchema.safeParse(req.body)

   if (!validBody.success) {
      res.status(400).send(validBody.error.errors)
      return
   }

   const musicId = req.params.id

   const cover = crypto.randomUUID().replace(/-/g, '')

   const music = await db.music.update({
      where: {
         id: musicId,
      },
      data: {
         title: validBody.data.title,
         artist: validBody.data.artist,
         cover: cover,
      },
   })

   res.json(formatResponse(music, null))
}

export async function deleteMusic(req: AuthRequest, res: Response) {
   const user = req.user
   if (!user) {
      res.status(401).send('Unauthorized')
      return
   }
   const music = await db.music.findFirst({
      where: {
         id: req.params.id,
      },
   })
   if (!music || music.userId !== user.id) {
      res.status(404).send('Music not found')
      return
   }

   await db.music.delete({
      where: {
         id: req.params.id,
      },
   })

   res.status(204).send()
}

export async function getMusics(req: AuthRequest, res: Response) {
   const user = req.user
   if (!user) {
      res.status(401).send('Unauthorized')
      return
   }

   const musics = await db.music.findMany({
      where: {
         userId: user.id,
      },
   })

   res.json(formatResponse(musics, null))
}

export async function getMusicById(req: AuthRequest, res: Response) {
   const user = req.user
   if (!user) {
      res.status(401).send('Unauthorized')
      return
   }

   const music = await db.music.findFirst({
      where: {
         id: req.params.id,
         userId: user.id,
      },
   })

   if (!music) {
      res.status(404).send('Music not found')
      return
   }

   res.json(formatResponse(music, null))
}
