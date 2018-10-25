var users = require('../../app/controllers/users.server.controller')

module.exports = function(app) {
  app.route('/users/new$')
    .post(users.new)
    .get(users.new)
}
