const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const next = require('next');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.set('port', port);
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());

  server.get('*', (req, res) => handleRequest(req, res));

  server.listen(port, error => {
    if (error) throw error;
    console.log(
      'The server is running at http://localhost:%d in %s mode.',
      server.get('port'),
      server.get('env')
    );
    console.log('Press CTRL-C to stop.\n');
  });
});
