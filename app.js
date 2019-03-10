const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const datafeeds  = require('./routes/datafeeds');
const sensors  = require('./routes/sensors');

const app = express();

// uncomment after placing your favicon in /public
app.use(logger('dev'));
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);
app.use(cookieParser());

app.use('/', routes);
app.use('/datafeeds', datafeeds);
app.use('/sensors', sensors);


// catch 404 and forward to error handler
app.use((req, res, next)  => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


module.exports = app;
