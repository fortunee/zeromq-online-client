const sub = (router) => {
  router.route('/sub').get((req, res) => res.json({ message: 'sub route working' }));
};

export default sub;
