#!/bin/sh
npm i server
npx server/prisma generate
npx server/prisma migrate dev --name init
cd .. 
npm run start:dev