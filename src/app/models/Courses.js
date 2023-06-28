const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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

Courses.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Courses', Courses);
