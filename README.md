# Moleculer 

Moleculer is a progressive microservices framework for Node.js.

**Website**:  [https://moleculer.services](https://moleculer.services/)

**Documentation**:  [https://moleculer.services/docs](https://moleculer.services/docs)

### Get Started

In order to understand the project stack is important to understand:

- [What is a Microservice?](https://microservices.io/)

- [What is Moleculer JS?](https://moleculer.services/docs)

- [Install nvm](https://github.com/nvm-sh/nvm#install--update-script)

- [Install nvm Windows](https://github.com/coreybutler/nvm-windows)

## Local Development Setup

Install dependencies:

This project requires node version 10.16.1. You can use  [NVM](https://github.com/creationix/nvm)  to select the correct version of node.

```
cd APIGateway
nvm use
yarn install
```
```
cd FirstMoleculer
nvm use
yarn install
```

Create a .env file, copy the .env.dev file and rename to .env and setup your configuration to the .env file.

Run the project from the command line for development:

```
cd FirstMoleculer
nvm use
yarn run dev
```

In a other terminal

```
cd APIGateway
nvm use
yarn run dev
```

## Production Setup

### Requirements

- [Docker](https://docs.docker.com/install/)
- [Docker Login](https://docs.docker.com/engine/reference/commandline/login/)

### Build First Moleculer

```
cd FirstMoleculer
./docker-build <username>/<name> <tag>
```

### Build API Gateway

```
cd APIGateway
./docker-build <username>/<name> <tag>
```

## Run Docker Compose

If you change the project and you run a build then change the images on docker-compose.yml on root folder

Exec:

```
docker-compose up
```