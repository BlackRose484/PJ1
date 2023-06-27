class NewsController {
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('DME M WIN');
  }
}

module.exports = new NewsController();
