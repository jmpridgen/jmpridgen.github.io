const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(express.static(path.join(__dirname, '../', '../', '/public')));

// log output of each request differently in production and development
app.use(process.env.NODE_ENV !== 'production' ? morgan('dev') : morgan('combined'));

// use standard http headers for security
app.use(helmet());

// app.use('/', expressStaticGzip(path.join(__dirname, '../', '../', '/public')));

app.get('*', (req, res) => {
  const fPath = path.join(__dirname, '../', '../', 'public', 'index.html');
  res.sendFile(fPath);
});

// error handler
app.use(require('./util/errorHandlers'));
// app.use(errorhandler());
// app.use((err, req, res, _next) => {
//   // const errorMessage = err.response.data.error;
//   // res.status(err.status || err.response.status || 500);
//   // return res.send({
//   //   error: errorMessage,
//   // });
// });

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App running on port', port, 'in', app.get('env'), 'environment'));
