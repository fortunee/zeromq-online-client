import pub from './pub.routes';
import sub from './sub.routes';
import push from './push.routes';
import pull from './pull.routes';
import request from './req.routes';
import reply from './reply.routes';

const routes = (router) => {
  pub(router);
  sub(router);
  push(router);
  pull(router);
  request(router);
  reply(router);
};

export default routes;
