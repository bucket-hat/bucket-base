'use strict';

module.exports = app => {

  class home extends app.library.controller {
    async post() {
      const { ctx } = this;
      const result = await app.service.home.index();
      ctx.status = 200;
      ctx.body = result;
    }
  }

  return home;
};