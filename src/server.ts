import * as express from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import * as m from "./models";
import e = require("express");

const app = express().use(express.json());
const port = 80;
const prisma = new PrismaClient();
const hostname = "0.0.0.0";

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

app.post("/simulation/session", async (req, res) => {
  let description = !!req.query.description
    ? String(req.query.description)
    : null;
  let result: any;
  try {
    result = await prisma.session.create({
      data: {
        description: description,
      },
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.put("/simulation/session", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.session.update({
      where: {
        id: req.body["id"],
      },
      data,
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
});

app.get("/simulation/session", async (req, res) => {
  try {
    const q = req.query
    const scene = (q.scene == 'true' ? true : false);
    const events = (q.events == 'true' ? true : false);
    const participants = (q.participants == 'true' ? true : false);
    let results;
    results = await prisma.session.findUnique({
      where: {
        id: String(q.id),
      },
      include:{
        participants: {
          select:{
            id:true,
            firstname:true,
            addition:true,
            lastname:true,
            role:true,
          }
        },
        events: {
          select:{
            id:true,
            action:true,
            timestamp:true,
            user_id:true,
            glasses:true,
            filter:true
          }
        },
        scene:{
          select:{
            id: true,
            evidences: {
              select:{
                id:true,
                x:true,
                y:true,
                z:true,
                type:true,
                event_id:true
              }
            }
          }
        }
      }
    });
    
    // Remove delete constraints of original object.
    results = JSON.parse(JSON.stringify(results));
    if(!participants) delete results.participants
    if(!events) delete results.events;
    if(!scene) delete results.scene;
    res.send(results);
  } catch (e) {
    internalError(res, e);
  }
});

app.post("/simulation/user", async (req, res) => {
  const q = req.query;
  let result: any;
  if(!!!q.firstname || !!!q.lastname || !!!q.role){
    res.statusCode = 500;
    res.send("Invalid parameters.");
    return
  }
  try {
    result = await prisma.user.create({ 
      data:{
        firstname: String(q.firstname),
        lastname: String(q.lastname),
        addition: !!q.addition ? String(q.addition) : null,
        role: String(q.role)
      },
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.get("/simulation/user", async (req, res) => {
  const q = req.query;
  const id = !!q.id;
  let results;
  try {
    if(id){
      results = await prisma.user.findUnique({
        where: {
          id: String(q.id)
        }
      });
    } else {
      results = await prisma.user.findMany();
    }
    res.send(results);
  } catch (e) {
    internalError(res, e);
  }
});

app.put("/simulation/user", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.user.update({
      where: {
        id: req.body["id"],
      },
      data,
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
});

app.delete("/simulation/user", async (req, res) => {
  let result: any;
  try {
    result = await prisma.user.delete({
      where: {
        id: String(req.query.id),
      },
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.post("/simulation/scene", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.scene.create({ data });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.get("/simulation/scene", async (req, res) => {
  const results = await prisma.scene.findMany({
    include: {
      evidences: true,
    },
  });
  res.send(results);
});

app.get("/simulation/evidence", async (req, res) => {
  const results = await prisma.evidence.findMany();
  res.send(results);
});

app.post("/simulation/evidence", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.evidence.create({ data });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.put("/simulation/evidence", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.evidence.update({
      where: {
        id: req.body["id"],
      },
      data,
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
});

app.post("/simulation/event", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.event.create({ data });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.put("/simulation/event", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.event.update({
      where: {
        id: req.body["id"],
      },
      data,
    });
    res.send(result);
  } catch (e) {
    internalError(res, e);
  }
});

const server = app.listen(port, hostname, () =>
  console.log(`🚀 Server ready at: ${hostname}:${port}`)
);

function internalError(res: express.Response, error: any) {
  console.log(error);
  res.statusCode = 500;
  res.send(error);
}
