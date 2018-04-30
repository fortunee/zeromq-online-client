const reply = (router) => {
  router.route('/reply').get((req, res) => res.json({ message: 'Reply pattern route working' }));
};

export default reply;
