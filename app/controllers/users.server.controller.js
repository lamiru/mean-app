var User = require('mongoose').model('User')

exports.index = function(req, res, next) {
  // User.find({}, function(err, users) { 조건 없이 전체 조회
  User.find({}, 'username firstName lastName email', { skip: 0, limit: 1000 }, function(err, users) {
    if (err) {
      return next(err)
    } else {
      res.render('users_index', {
        title: 'Users List',
        users: users
      })
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

exports.detail = function(req, res) {
  res.json(req.user)
}

exports.edit = function(req, res, next) {
  if (req.method == 'POST') {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
      if (err) {
        return next(err)
      } else {
        res.json(user)
      }
    })
  } else {
    res.render('form', {
      title: 'Form',
      user: req.user
    })
  }
}

exports.delete = function(req, res, next) {
  if (req.method == 'POST') {
    req.user.remove(function(err) {
      if (err) {
        return next(err)
      } else {
        res.json(req.user)
      }
    })
  } else {
    res.render('users_delete', {
      title: 'Delete',
    })
  }
}

exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      return next(err)
    } else {
      req.user = user
      next()
    }
  })
}

