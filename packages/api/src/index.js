import chokidar from 'chokidar';
import express from "express";
import url from "url";

import { proxy } from "@stack/web/package";

const { port, path } = url.parse(proxy);

const app = express();

const graphql = require.resolve('./graphql');

// https://github.com/glenjamin/ultimate-hot-reloading-example/blob/master/server.js
// https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0
(dirnames => {
  const watcher = chokidar.watch(dirnames);
  watcher.on('ready', () => 
   watcher.on('all', () => {
     Object.keys(require.cache).filter(id => !id.match(/node_modules/) && dirnames.find(dirname => id.startsWith(dirname))).forEach(id => {
       console.log(`Clearing require.cache ${id}`)
       delete require.cache[id];
     });
   })
 );
})([graphql, require.resolve('@stack/sql'), require.resolve('@stack/web/schema.gql')].map(path => require('path').dirname(path)));

app.use(
  path,
  (...args) => require(graphql).default(...args)
);

const server = app.listen(port, () =>
  (({ address, port }) =>
    console.log(
      `Server is running on http://${
        address === "::" ? "localhost" : address
      }:${port}${path}`
    ))(server.address())
);
