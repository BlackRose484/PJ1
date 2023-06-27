const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars').engine;
const morgan = require('morgan');
const app = express();
const port = 4000;

const route = require('./routes');

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
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
