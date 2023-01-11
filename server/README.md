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
cd ~
git clone https://github.com/martijnlammers/TNO_Sim.git

cd ~/TNO_Sim/server 
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
cd ~/TNO_Sim/server/prisma
npx prisma generate
npx prisma migrate dev --name init
```
### Create and run the build:
```bash
cd ~/TNO_Sim/server
npm run build

# API runs on port 80, so it is necessary to run the application with root permissions. 
sudo npm start
```
### Using the API:
```bash
# When the server is started using 'sudo npm start';
# visit http://hostaddress/api for Swagger docs on the endpoints.
# The API uses standard HTTP requests with JSON bodies to transfer data.
```
#### Curl:
```bash
curl -X 'POST' \
  'http://hostaddress/prefab/append' \
  -H 'Content-Type: application/json' \
  -d '{ "key": "string", "value": "string" }'
```
#### Javascript:
```javascript
//https://reqbin.com/code/javascript/wzp2hxwh/javascript-post-request-example
const data = { key: "string", value: "string" };
const response = await fetch(`http://hostaddress/prefab/append`, 
    {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
);
```
#### C#:
```C#
// https://stackoverflow.com/questions/4015324/send-http-post-request-in-net
using System.Net.Http;
class ClassName {
    private static readonly HttpClient client = new HttpClient();
    var body = new Dictionary<string, string>{
        { "key", "string" },
        { "value", "value"}
    };
    var response = await client.PostAsync("http://hostaddress/prefab/append", new FormUrlEncodedContent(body));
}
```



