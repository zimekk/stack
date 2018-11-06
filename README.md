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
docker-compose run --rm db
```

```sh
docker ps
docker exec -it stack_db_1 su postgres -c "psql stack"
```

```sh
docker-compose up --build api
```

```sh
docker-compose run api sh
```

https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

```sh
docker-compose rm
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
- [ ] Authorization (https://blog.pusher.com/handling-authentication-in-graphql-auth0/)
- [x] Sending an e-mail (https://nodemailer.com/about/)
- [ ] Session management
- [ ] GraphQL Subscriptions (https://github.com/apollographql/graphql-subscriptions)
- [ ] Instant notifications
- [x] Database usage (https://node-postgres.com/features/queries)
- [ ] Sequelize usage (https://github.com/benawad/slack-clone-server/tree/4_resolvers)
- [ ] E2E testing (https://www.browserstack.com/test-on-microsoft-edge-browser#live-cloud)
