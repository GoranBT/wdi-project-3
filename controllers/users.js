const User = require('../models/user');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('locations cities')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      return res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: showRoute
};
