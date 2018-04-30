const push = (router) => {
  router.route('/push').post((req, res) => res.json({ message: 'push route working' }));
};

export default push;
