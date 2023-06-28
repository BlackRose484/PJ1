const Courses = require('../models/Courses');
//const {multi} = require('../../util/mongoose');
class SiteController {
  index(req, res, next) {
    Courses.find({})
      .lean()
      .then((courses) => {
        res.render('home', { courses });
      })
      .catch(next);
  }
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
