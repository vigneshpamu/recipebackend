import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'
import dotenv from 'dotenv'
const PORT = process.eventNames.PORT || 3001
/// MERNpassword@123

const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipesRouter)

mongoose.connect(
  'mongodb+srv://admin:MERNpassword123@recipes.bk1gjgu.mongodb.net/recipes?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

app.listen(PORT, () => {
  console.log('SERVER STARTED')
})
