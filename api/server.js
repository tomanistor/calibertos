const Hapi = require('hapi');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/calibertos-dev', {
  useMongoClient: true
})
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.error(err))


const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        return reply('hello world');
    }
});

server.start((err) => {
        if (err) {
                throw err;
        }
        console.log('Server running at: ', server.info.uri);
})
