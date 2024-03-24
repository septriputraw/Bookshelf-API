const Hapi = require('@hapi/hapi');
const routes = require('./routes');
// dotenv
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
