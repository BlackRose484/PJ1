const Courses = require('../models/Courses');

class CoursesController {
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render('./courses/show', { course });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render('./courses/create');
  }
  store(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Courses(formData);
    course.save().then(() => res.redirect('/'));
  }
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .lean()
      .then((course) => res.render('courses/edit', { course }))
      .catch(next);
  }
  update(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    Courses.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  destroy(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  restore(req, res, next) {
    Courses.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  destroyF(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CoursesController();
