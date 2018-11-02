import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

// https://github.com/sogko/graphql-schema-language-cheat-sheet
// https://medium.freecodecamp.org/organizing-graphql-mutations-653306699f3d
// https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97
// https://medium.com/@__xuorig__/graphql-mutation-design-anemic-mutations-dd107ba70496
// https://blog.apollographql.com/graphql-schema-design-building-evolvable-schemas-1501f3c59ed5
const schema = buildSchema(`
  type Query {
    hello: String
    messages: [Message]
  }
  type Contact {
    id: String!
    name: String!
  }
  input CreateContactInput {
    name: String!
  }
  input UpdateContactInput {
    id: String!
    name: String!
  }
  input RemoveContactInput {
    id: String!
  }
  type ContactOps {
    create(input: CreateContactInput!): Contact
    update(input: UpdateContactInput!): Contact
    remove(input: RemoveContactInput!): Boolean
  }
  type Message {
    text: String!
  }
  input MessageInput {
    text: String!
  }
  type MessageOps {
    add(input: MessageInput!): [Message]
    clear: Boolean
  }
  type Mutation {
    Contact: ContactOps
    Message: MessageOps
  }
  schema {
    query: Query
    mutation: Mutation
  }
`);

const data = {
  messages: [
    { text: 'Initial message' }
  ]
};

const root = {
  hello: () => "Hello world!",
  messages: () => data.messages,
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
