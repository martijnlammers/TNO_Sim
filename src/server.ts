import * as express from "express";
import { PrismaClient } from '@prisma/client'
const app = express()
app.use(express.json());
const port = 3000
const prisma = new PrismaClient()

interface IEvent {
  user_id: string
}


app.post('/event', async (req, res) => {
  const user = await prisma.sim_event.create({
    data: {
      user_id: req.body['user_id'],
    },
  })
  
  const results = await prisma.sim_event.findMany({
    where: {
      user_id: 'martijn',
    },
  })
  res.send(results)
})

app.delete('/event', async (req, res) => {
  const results = await prisma.sim_event.deleteMany({
    where: {
      user_id: req.body['user_id'],
    },
  })
  res.send(results)
})

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),
)