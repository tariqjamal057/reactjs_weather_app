FROM node:20-alpine

WORKDIR /app

COPY package*.json . 

RUN npm install --no-optional

COPY . . 

CMD [ "npm", "run", "dev" ]