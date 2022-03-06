const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const { handlebars } = require('express-handlebars')
const handlebars = require('express-handlebars')
const hbs = handlebars.create({ extname: '.hbs' })

const app = express();
const port = 3000;

app.use(morgan('dev'));

//handlebars
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// app.engine('handlebars', handlebars({}));
// app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public'))); 

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on at http://localhost:${port}`)
})