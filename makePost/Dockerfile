ARG NODE_VERSION=19.3.0

FROM node:${NODE_VERSION}-alpine

RUN ls -la

COPY package.json ./

RUN npm install

COPY . .
ENV Make_Post_PORT=6001

EXPOSE 6001

CMD [ "npm", "run", "start" ]
