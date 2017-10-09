const User = require('../models/Users');

module.exports = [
  // GET /users
  // Returns all Users
  {
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
      console.log("GET /users called.\n");

      User.find(function(err, users) {
        if (err) {
          console.error(err);
        }

        reply(users);
      });
    }
  },

  // GET /users/:id
  // Returns User with given id
  {
    method: 'GET',
    path: '/users/{id}',
    handler: function(request, reply) {
      console.log("GET /users/:id called.\n");

      User.findOne({ _id: request.params.id }, (err, user) => {
        if (err) {
          return reply(err);
        }

        if (!user) {
          return reply({statusCode: 404, error: 'Not Found', message: 'Record not found.'}).code(404);
        }

        reply(user);
      });
    }
  },

  // POST /users
  // Accepts JSON: {name: String, email: String}
  // Returns id of created User
  {
    method: 'POST',
    path: '/users',
    handler: function (request, reply) {
      console.log("POST /users called.\n");

      var payload = request.payload;

      const user = new User({
        name: payload.name,
        email: payload.email
      });

      user.save(function(err, user) {
        if (err) {
          return reply(err);
        }

        reply({'id': user._id}).code(201);
      });
    }
  },

  // DELETE /users/:id
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: function (request, reply) {
      console.log("DELETE /users/:id called.\n");

      User.findByIdAndRemove(request.params.id, (err, user) => {
        if (err) {
          return reply(err);
        }

        if (!user) {
          return reply({statusCode: 404, error: 'Not Found', message: 'Record not found.'}).code(404);
        }

        reply({id: user._id});
      });
    }
  }
];
