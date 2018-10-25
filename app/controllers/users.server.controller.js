var User = require('mongoose').model('User')

exports.new = function(req, res, next) {
  if (req.method == 'POST') {
    var user = new User(req.body)

    user.save(function(err) {
      if (err) {
        return next(err)
      } else {
        res.json(user)
      }
    })
  } else {
    res.render('form', {
      title: 'Form'
    })
  }
}
