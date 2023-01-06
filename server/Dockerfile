FROM node:14
WORKDIR /server
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
RUN npm install
RUN npx prisma generate
COPY . . 
EXPOSE 80
CMD ["npm", "start"]