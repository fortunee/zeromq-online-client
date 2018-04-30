import pub from './pub.routes';
import sub from './sub.routes';
import push from './push.routes';

const routes = (router) => {
  pub(router);
  sub(router);
  push(router);
};

export default routes;

