FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6000
EXPOSE 6001
EXPOSE 6002
EXPOSE 6003

CMD [ "npm", "start" ]
