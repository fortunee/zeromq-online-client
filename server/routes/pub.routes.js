const pub = (router) => {
  router.route('/pub').post((req, res) => res.json({ message: 'pub route working' }));
};

export default pub;
