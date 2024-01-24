# Choco-Shop FullStack App

## Description

Online store with chocolate products and other sweets.

Customers can make purchases both as guests and logged in users. Orders of logged-in users are stored on the server, while guests' orders are stored in their browsers in localStorage, and after confirm upload on server.

### Live demo

The project is hosted on free hosting, loading for the first time may take some time. Please be patient.

**[Choco-Shop]()**

### Technologies

- Frontend
  - React
- Backend
  - Nest.js
  - Prisma
  - JWT
- Database
  -MySQL

## Installation

```bash
$ npm install 

$ yarn install
```

## Running the app

```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
# e2e tests
$ npm run test:e2e
# test coverage
$ npm run test:cov
```

## Data base

```bash
# local: `mysql://localhost:3306/choco-shop-db`
# To add example data:
$ npx prisma db seed
```

