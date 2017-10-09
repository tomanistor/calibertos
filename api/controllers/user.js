const User = require('../models/Users');

module.exports = [
  // GET /users
  // Returns all Users
  {
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
      console.log("GET /users called.\n");

      User.find(function(error, users) {
        if (error) {
          console.error(error);
        }

        reply(users);
      });
    }
  },

  // POST /users
  // Accepts JSON: {name: String, email: String}
  // Returns _id of created User
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

      user.save(function(error, user) {
        if (error) {
          console.error(error);
        }

        reply({'id': user._id});
      });
    }
  }
];
