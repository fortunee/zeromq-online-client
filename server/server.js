import express from 'express';
import bodyParser from 'body-parser';
import { log } from 'util';

import routes from './routes';

const app = express();
const router = express.Router();

app.use(bodyParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

routes(router);

app.get('api/*', (req, res) => {
  res.send({ message: 'Man! you calling the wrong API endpoint' });
});

app.use('/api', router);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  log(`Find your shit running here...http://localhost:${port}`);
});
