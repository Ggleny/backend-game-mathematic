const express = require('express')
const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
var session = require('express-session');

var {redisStore} = require('./app/redis');

app.use(session({
  secret: 'somesecret',
  store: redisStore,
  saveUninitialized: false,
  resave: false
}));


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//app.use(logger('dev'));
app.use(cors(corsOptions));

app.use( bodyParser.urlencoded( {
  extended: true
} ) );

app.use( bodyParser.json() );

//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/game',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(require('./app/routes'));


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});