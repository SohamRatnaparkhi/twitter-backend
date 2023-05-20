ARG NODE_VERSION=19.3.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json yarn*.lock ./

RUN yarn install --frozen-lockfile

COPY . .
ENV Read_post_PORT=6000

EXPOSE 6000

CMD [ "yarn", "start" ]
