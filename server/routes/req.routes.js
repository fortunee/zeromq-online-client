const request = (router) => {
  router.route('/req').get((req, res) => res.json({ message: 'Request pattern route on point' }));
};

export default request;
