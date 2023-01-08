Setup
======
These instructions guide the developer to set up 
and use the REST API used to manipulate the database.
It is important to note that this guide assumes that
a PostgreSQL database has already been set up.
If this has not been done yet, please
refer to [this website](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04).

# Pre-requisites
Software | Version | Check version (Ubuntu) 
--- | --- | --- 
Ubuntu | 22.04.1 | lsb_release -a 
NodeJS | 14.20.1 | node -v 
Git | 2.34.1 | git --version
PostgreSQL | 14.5 | psql -V

# Instructions
### Clone the repository and install the dependencies:
```bash
git clone https://github.com/martijnlammers/TNO_Sim.git

cd ./TNO_Sim/server 
npm i && npm i prisma --save-dev && npm i @prisma/client
```
### Set up your enviorment:
```bash
# In the directory /TNO_Sim/server
nano .env

# Inside the .env file, set up the following:
# Example base structure postgresql URL
# For more details, visit https://www.prisma.io/
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# The host address 
# Typically 0.0.0.0,
# Use 127.0.0.0 or localhost for local development.
HOST=127.0.0.0

# After declaring the variables, save and exit the file.
```
### Setting up database:
```bash
cd /prisma
npx prisma generate
prisma migrate dev --name init
```
### Create and run the build:
```bash
cd /TNO_Sim/server
npm run build
npm start
```