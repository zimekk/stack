import { Pool } from 'pg';
// const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/stack'
})
/*
query {
  contacts {
    id, name
  }
}
mutation {
  Contact {
    create(input: { name: "test" }) {
      id
    }
  }
}
mutation {
  Contact {
    update(input: { id: "1", name: "test" }) {
      id
    }
  }
}
mutation {
  Contact {
    remove(input: { id: "1" })
  }
}
*/
export const query = (text, params) => pool.query(text, params);
// require.exports = { query: (text, params) => pool.query(text, params) };
