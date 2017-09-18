'use strict';

module.exports = () => {
  class home {
    constructor() {}

    async index() {
      return 'Hello Bucket!';
    }
  }
  return new home();
};
