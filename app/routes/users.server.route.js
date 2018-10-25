var users = require('../../app/controllers/users.server.controller')

module.exports = function(app) {
  app.route('/users$')
    .get(users.index)

  app.route('/users/new$')
    .post(users.new)
    .get(users.new)

  app.route('/users/:userId$')
    .get(users.detail)

  app.param('userId', users.userByID)
}
