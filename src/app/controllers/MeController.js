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
  trash(req, res, next) {
    Courses.findDeleted()
      .lean()
      .then((courses) => {
        console.log(typeof courses);
        courses = courses.filter((course) => course.deleted === true);
        res.render('me/trash', { courses });
      })
      .catch(next);
  }
}

module.exports = new MeController();
