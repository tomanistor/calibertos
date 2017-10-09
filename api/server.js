const Hapi = require('hapi');
const mongoose = require('mongoose');

/** DB START **/
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/calibertos-dev', {
  useMongoClient: true
})
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.error(err))


/** INITIAL SERVER **/
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

/** ROUTES **/
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply({'message': 'Hello World!'});
    }
});

const UserRoutes = require('./controllers/user');

server.route(UserRoutes);

/** SERVER START **/
server.start((err) => {
        if (err) {
                throw err;
        }
        console.log('Server running at: ', server.info.uri);
})
