import 'express-async-errors'
import 'dotenv/config'
import express from 'express'

import userRouter from './features/user/user.route'
import musicRouter from './features/music/music.route'
import authRouter from './features/auth/auth.route'
import db from './config/db'
import handleError from './middlewares/handleError'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.use('/api/users', userRouter)
app.use('/api/musics', musicRouter)
app.use('/api/auth', authRouter)

app.use(handleError)
;(async () => {
   const PORT = process.env.PORT || 5000
   try {
      await db.$connect()
      app.listen(3000, () => {
         console.log(`Server is running on http://localhost:${PORT}`)
      })
   } catch (error: any) {
      console.log('Database connection error', error)
   }
})()
