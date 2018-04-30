const pull = (router) => {
  router.route('/pull').get((req, res) => res.json({ message: 'pull endpoint works' }));
};

export default pull;
