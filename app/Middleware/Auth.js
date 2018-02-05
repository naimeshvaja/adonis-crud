'use strict'

class Auth {
  async handle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = Auth
