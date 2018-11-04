import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stack',
  password: 'password',
  port: 5432,
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
