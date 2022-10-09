import * as express from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import * as m from "./models";


const app = express().use(express.json());
const port = 80;
const prisma = new PrismaClient();
const hostname = '0.0.0.0';

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

app.post("/simulation/session", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.session.create({ data });
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send(e);
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
    console.log(e);
    res.send(e);
  }
});

app.get("/simulation/session", async (req, res) => {
  const keywords = req.body["keywords"];
  console.log(keywords);
  try{
    let results = await prisma.session.findMany(keywords);
    res.send(results);
  } catch(e){
    console.log(e);
    res.send(e);
  }
});

app.post("/simulation/user", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.user.create({ data });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
  return;
});

app.get("/simulation/user", async (req, res) => {
  const keywords = req.body["keywords"];
  console.log(keywords);
  try{
    let results = await prisma.user.findMany(keywords);
    res.send(results);
  } catch(e){
    console.log(e);
    res.send(e);
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
    console.log(e);
    res.send(e);
  }
});

app.delete("/simulation/user", async (req, res) => {
  let result: any;
  try {
    result = await prisma.user.delete({
       where: {
        id:req.body["id"]
       } 
      });
    res.send(result);
  } catch (e) {
    res.send(e);
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
    console.log(e);
    res.send(e);
  }
  return;
});

app.get("/simulation/scene", async (req, res) => {
  const results = await prisma.scene.findMany({
    include:{
      evidences: true
    }
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
    console.log(e);
    res.send(e);
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
    console.log(e);
    res.send(e);
  }
});

app.post("/simulation/event", async (req, res) => {
  const data = req.body;
  let result: any;
  try {
    result = await prisma.event.create({ data });
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send(e);
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
    console.log(e);
    res.send(e);
  }
});


const server = app.listen(port, hostname, () =>
  console.log(`🚀 Server ready at: ${hostname}:${port}`)
);
