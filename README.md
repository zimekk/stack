# stack

[![Build Status](https://travis-ci.com/zimekk/stack.svg?branch=master)](https://travis-ci.com/zimekk/stack)

## setup

```sh
yarn
```

## development

```sh
yarn start
```

## docker

```sh
docker-compose up
```

```sh
docker-compose build
docker-compose run --rm api
```

```sh
docker-compose run --rm --no-deps api yarn test
```

```sh
docker ps
docker exec -it stack_api_1 sh
```

```sh
docker-compose run --rm sql
```

```sh
docker ps
docker exec -it stack_sql_1 su postgres
```

```sh
docker-compose up --build api
```

```sh
docker-compose run api sh
```

https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

```sh
docker-compose down
docker-compose kill
docker system prune -a
```

## todo

- [x] Embedding Status Images (https://docs.travis-ci.com/user/status-images/)
- [x] GitHub Pages Deployment (https://facebook.github.io/create-react-app/docs/deployment#docsNav)
- [x] GraphQL Query & Mutations (https://medium.freecodecamp.org/organizing-graphql-mutations-653306699f3d)
- [x] GraphQL Schema Documentation (https://zimekk.github.io/stack/schema/)
- [x] API Server hot reloading (https://github.com/glenjamin/ultimate-hot-reloading-example)
- [ ] Registration
- [ ] Authorization
- [ ] Sending an e-mail
- [ ] Session management
- [ ] GraphQL Subscriptions
- [ ] Instant notifications
- [ ] Database usage
- [ ] E2E testing (https://www.browserstack.com/test-on-microsoft-edge-browser#live-cloud)
