FROM node:18-alpine

WORKDIR /usr/src/game-changer/back

COPY package*.json ./

RUN yarn

RUN yarn add global nodemon

EXPOSE 3080

CMD ["yarn", "dev"]