const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Courses = new Schema(
  {
    name: String,
    des: String,
    image: String,
    videoId: String,
    slug: { type: String, slug: 'name' },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Courses', Courses);
