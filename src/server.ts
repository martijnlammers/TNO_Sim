import * as express from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import * as m from "./models";

const app = express();
app.use(express.json());
const port = 3000;
const prisma = new PrismaClient();

// app.post('/simulation/history', async (req, res) => {
//   const result = await prisma.sim_history.create({
//     data: {
//       id: `${uuidv4()}`,
//     }
//   });
//   res.send(result);
// })

// app.get('/simulation/history', async (req, res) => {
//   let result: any;
//   if(req.body['id'] != null){
//     result = await prisma.sim_history.findUnique({
//       where: {
//         id: req.body['id'],
//       },
//       include: {
//         events: true,
//       }
//     });
//   } else {
//     result = await prisma.sim_history.findMany()
//   }

//   res.send(result);
// })

// app.delete('/simulation/history', async (req, res) => {
//   const result = await prisma.sim_history.deleteMany()
//   res.send(result);
// })

// app.get('/simulation/event', async (req, res) => {
//   const results = await prisma.sim_event.findMany({
//     where: {
//       user_id: req.body['user_id'],
//     },
//   });
//   res.send(results);
// })

// app.post('/simulation/event', async (req, res) => {
//   const results = await prisma.sim_event.create({
//     data: {
//       user_id: req.body['user_id'],
//       action: req.body['action'],
//       history_id: req.body['history_id']
//     },
//   });
//   res.send(results);
// })

app.post("/simulation/user", async (req, res) => {
  const body = req.body;
  const existingUser = await prisma.user.findFirst({
    where: {
      firstname: body["firstname"],
      lastname: body["lastname"],
      addition: body["addition"],
    }
  });

  // Check if user already exists.
  if(existingUser != undefined){ 
    res.send("User already exists.");
    return;
  }
  
  // Check on valid role assignment.
  if (Object.values(m.Roles).includes(body["role"])) {
    const result = await prisma.user.create({
      data: {
        id: uuidv4(),
        firstname: body["firstname"],
        lastname: body["lastname"],
        addition: body["addition"],
        role: body["role"],
      },
    });
    res.send(result);
    return;
  }
  res.send("Invalid inputs.");
});

app.get("/simulation/user", async (req, res) => {
  const results = await prisma.user.findMany();
  res.send(results);
});

const server = app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
