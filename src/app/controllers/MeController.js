const Courses = require('../models/Courses');

class MeController {
  stored(req, res, next) {
    Courses.find({})
      .lean()
      .then((courses) => {
        res.render('me/stored', { courses });
      })
      .catch(next);
  }
}

module.exports = new MeController();
