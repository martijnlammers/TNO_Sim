import * as express from "express";
import { PrismaClient } from "@prisma/client";
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
  let session, scene: any;
  try {
    session = await prisma.session.create({
      data: {
        description: description,
      },
    });
    scene = await prisma.scene.create({
      data: {
        name: 'N/A',
        description: 'N/A',
        session_id: session.id
      },
    });
    res.send(session);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.delete("/simulation/session", async (req, res) => {
  let session, scene, evidence: any;
  try {
    scene = await prisma.scene.findUnique({
      where:{session_id: String(req.query.id)}
    });
  } catch (e){}
  try {
    evidence = await prisma.evidence.deleteMany({
      where:{scene_id: String(scene?.id)}
    });
  } catch (e){}
  try{
    scene = await prisma.scene.delete({
      where:{session_id: String(req.query.id)}
    });
  } catch (e){}
  try {
    session = await prisma.session.delete({
      where:{id: String(req.query.id)}
    });
    res.send(session);
  } catch (e) {
    internalError(res, e);
  }
  return;
});

app.get("/simulation/session", async (req, res) => {
  try {
    const q = req.query
    const scene = (q.scene == 'true' ? true : false);
    const events = (q.events == 'true' ? true : false);
    const participants = (q.participants == 'true' ? true : false);
    let results;
    const id = !!q.id;
    if(id){
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
              evidence: true,
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
    } else { 
      results = await prisma.session.findMany();
    }
    
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

app.post("/simulation/evidence", async (req, res) => {
  const data = req.body;
  let result: any;
  try{
    result = await prisma.scene.findUnique({
      where:{
        session_id: data['session_id']
      }
    });
    let id = result['id']
    result = await prisma.evidence.create({
      data:{
        x:parseFloat(data['x']),
        y:parseFloat(data['y']),
        z:parseFloat(data['z']),
        type:data['type'],
        scene_id:id
      }
    });
    res.send(result);
  } catch(e){
    internalError(res, e);
  }
});

app.put("/simulation/evidence", async (req, res) => {
  const query = req.query;
  let result: any;
  try{
    result = await prisma.evidence.update({
      where:{
        id:String(query.id)
      },
      data:{
        event_id:String(query.event_id)
      }
    });
    res.send(result);
  } catch(e){
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

const server = app.listen(port, hostname, () =>
  console.log(`🚀 Server ready at: ${hostname}:${port}`)
);

function internalError(res: express.Response, error: any) {
  console.log(error);
  res.statusCode = 500;
  res.send(error);
}
