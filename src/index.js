const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { render } = require('express/lib/response');
const hbs = handlebars.create({ extname: '.hbs' });
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(morgan('dev'));

//handlebars
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Static file
app.use(express.static(path.join(__dirname,'public'))); 

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on at http://localhost:${port}`)
})