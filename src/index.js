
const path = require("path");
const express = require('express');
const exphbs = require('express-handlebars').engine;
const morgan = require('morgan');
const app = express();
const port = 4000;

app.use(morgan('combined'))

app.engine('hbs',exphbs({
  extname : '.hbs'
}));
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resoures/views'))


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})