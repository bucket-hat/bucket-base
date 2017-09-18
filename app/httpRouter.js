'use strict';

module.exports = (app) => {
  const router = app.library.httpRouter();

  router.get('/', 'home.index');
  router.get('/home', 'home.index');

  return router;
};
