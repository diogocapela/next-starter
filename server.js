const path = require('path');
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

dotenv.config({ path: path.join(__dirname, '.env') });

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const env = server.get('env');

  server.set('port', port);
  server.use(bodyParser.json({ extended: true }));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());

  server.get('*', (req, res) => handleRequest(req, res));

  server.listen(port, (error) => {
    if (error) throw error;
    console.log(`The server is now running at http://localhost:${port} in ${env} mode.`);
    console.log('Press CTRL-C to stop.\n');
  });
});
