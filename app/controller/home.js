'use strict';

module.exports = (app) => {
  class home extends app.library.controller {
    async index() {
      const { ctx } = this;
      const result = await app.service.home.index();
      if(result) {
        ctx.status = 200;
        ctx.body = result;
      } else {
        ctx.status = 403;
      }
    }
  }

  return home;
};