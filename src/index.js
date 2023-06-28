const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars').engine;
const morgan = require('morgan');
const methodOverride = require('method-override');
const db = require('./config/db');
const app = express();
const port = 4000;

const route = require('./routes');

app.use(methodOverride('_method'));
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
