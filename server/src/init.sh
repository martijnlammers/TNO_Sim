#!/bin/sh
# set PORT=80
# set HOST=0.0.0.0
# set DATABASE_URL=postgresql://postgres:postgres@postgres:5432/TNO_SIM_DB
cd server
npm i
cd prisma
npx prisma generate
npx prisma migrate dev --name init
cd ..
npm run start:dev