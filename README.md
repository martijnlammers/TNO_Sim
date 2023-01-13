# Pre-requisites
Software | Version | Check version (Ubuntu) 
--- | --- | --- 
Docker | 20.10.22 | docker --version

### Clone the repository and run docker.
```bash
git clone https://github.com/martijnlammers/TNO_Sim.git
cd ./TNO_Sim
docker-compose up
```
### Go to application.
The application will be hosted on: 'http://localhost/'.
Visit 'http://localhost/api' for the Swagger Docs to see how 
to interface to the application.




Manual

set PORT=8081
set HOST=localhost
set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/TNO_SIM_DB

cd server
npm i
cd prisma
npx prisma generate
npx prisma migrate dev --name init
cd ..
npm run build
npm start


npx prisma generate --schema=server\prisma\schema.prisma
npx prisma migrate dev --name init  --schema=server\prisma\schema.prisma
npm --prefix server run build
npm --prefix server start 