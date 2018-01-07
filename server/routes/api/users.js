const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/user', function(req, res, next) {
  const user = new User();
  user.firstName = req.body.user.firstName;
  user.lastName = req.body.user.lastName;

  user.save((err, newUser) => {
    if (err) return console.log("Error! " + err);
    return res.send(newUser.id);
  });
});

router.get('/users', function(req, res, next) {
  User.find({}, (err, users) => {
    if (err) return console.error(err);
    return res.json(users);
  });
});

router.get('/user/:id', (req, res, next) => {
  User.find({_id: req.params['id']}, (err, user) => {
    if (err) return console.error(err);
    return res.json(user);
  })
});

module.exports = router;