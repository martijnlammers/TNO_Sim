#!/bin/sh
cd ./server
npm i
cd server/prisma
npx prisma generate
npx prisma migrate dev --name init
