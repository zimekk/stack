import express from "express";
import graphqlHTTP from "express-graphql";

import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => "Hello world!"
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

const server = app.listen(4000, () =>
  (({ address, port, ...rest }) =>
    console.log(
      `Server is running on http://${
        address === "::" ? "localhost" : address
      }:${port}/graphql/`
    ))(server.address())
);
