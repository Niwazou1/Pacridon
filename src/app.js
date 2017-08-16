const express = require('express');
let app = express();

// Middleware Settings
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const path = require('path');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const cookieParser = require('cookie-parser');
app.use(cookieParser("太朗"));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));


app.locals.db = require('./db');


const routes = require('./routes');
routes(app);

module.exports = app;