FROM node:8.12-alpine

MAINTAINER Jose Segura <joseseguranietzen@gmail.com>

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=true --pure-lockfile

COPY . .
COPY .env.prod .env

#https://dev.to/hugodias/wait-for-mongodb-to-start-on-docker-3h8b
## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

EXPOSE 3000

# Execute moleculer-runner
CMD /wait && yarn start