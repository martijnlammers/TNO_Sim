#!/bin/sh
cd ..
npm i
cd ./prisma
npx prisma generate
npx prisma migrate dev --name init
cd .. 
npm run start:dev
