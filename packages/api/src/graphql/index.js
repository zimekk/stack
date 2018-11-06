import fs from "fs";
import graphqlHTTP from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";

import { query } from "@stack/sql";
import mail from "./mail";

// https://github.com/sogko/graphql-schema-language-cheat-sheet
// https://medium.freecodecamp.org/organizing-graphql-mutations-653306699f3d
// https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97
// https://medium.com/@__xuorig__/graphql-mutation-design-anemic-mutations-dd107ba70496
// https://blog.apollographql.com/graphql-schema-design-building-evolvable-schemas-1501f3c59ed5

const resolvers = {
  Query: {
    hello(value, {}) {
      return "Hello stack!";
    }
  },
};

const typeDefs = [``,
  fs.readFileSync(require.resolve("@stack/web/schema.gql")).toString()
];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const data = {
  messages: [
    { text: 'Initial message' }
  ]
};

const root = {
  hello: () => "Hello world!",
  messages: () => data.messages,
  contacts: () => query('SELECT * FROM contact', []).then(({ rows }) => rows.map(({ id, name }) => ({ id, name }))),
  Contact: () => ({
    create: ({ input: { name } })  => console.log(['Contact.create'], { name }) || query("INSERT INTO contact (name) VALUES ($1)", [name]).then(r => console.log(r)),
    update: ({ input: { id, name } })  => console.log(['Contact.update'], { name }) || query("UPDATE contact SET name=$1 WHERE id=$2", [name, id]).then(r => console.log(r)),
    remove: ({ input: { id } })  => console.log(['Contact.remove'], { id }) || query("DELETE FROM contact WHERE id=$1", [id]).then(r => console.log(r)),
    notify: ({ input: { subject, message } })  => console.log(['Contact.notify'], { subject, message }) || mail({ subject, message }).then(r => console.log(r)),
  }),
  Message: () => ({
    add: ({ input: { text } })  => console.log(['Message.add'], { text }) || (({ messages }) => messages)(Object.assign(data, { messages: data.messages.concat({text}) })),
    clear: ()  => console.log(['Message.clear']) || (({ messages }) => true)(Object.assign(data, { messages: [] }))
  })
};

export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
});
