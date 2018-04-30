import pub from './pub.route';
import sub from './sub.routes';

const routes = (router) => {
  pub(router);
  sub(router);
};
export default routes;

