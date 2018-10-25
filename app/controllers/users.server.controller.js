var User = require('mongoose').model('User')

exports.index = function(req, res, next) {
  // User.find({}, function(err, users) { 조건 없이 전체 조회
  User.find({}, 'username firstName lastName email', { skip: 0, limit: 1000 }, function(err, users) {
    if (err) {
      return next(err)
    } else {
      res.json(users)
    }
  })
}

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
