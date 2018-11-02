import { graphql } from "graphql";
import { schema } from "..";

it(`query { hello }`, async () => {
  const { data } = await graphql(schema, `query { hello }`);
  expect(data).toEqual({ hello: 'Hello stack!' });
});
