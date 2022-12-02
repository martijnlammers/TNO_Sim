#! /bin/bash
echo "Stopping existing processes..."
(cd ~ && sudo forever stopall) ;
echo "Pulling remote repository..."
(cd ./TNO_Sim && git pull) &&
echo "Installing new packages..."
(cd ./TNO_Sim/server && npm i && npm install prisma --save-dev && npm i @prisma/client) &&
echo "Generating prisma..."
(cd ./TNO_Sim/server/prisma/ && npx prisma generate) &&
echo "Creating JS build..."
(cd ./TNO_Sim/server && npm run build) &&
echo "Deploying build."
(sudo forever start ./TNO_Sim/server/dist/main.js)


