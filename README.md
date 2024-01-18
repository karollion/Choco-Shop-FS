# Choco-Shop FullStack App


## Description

Online store with chocolate products and other sweets.

Customers can make purchases both as guests and logged in users. Orders of logged-in users are stored on the server, while guests' orders are stored in their browsers in localStorage.

Data base:
```bash
# location: `mysql://localhost:3306/choco-shop-db`

# To add example data:
$ npx prisma db seed
```

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

