const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

class Mongo {
  constructor(config) {
    this.connection = mongoose
      .createConnection(`mongodb://${config.host}:${config.port}/${config.db}`, {
        w: 1,
        poolSize: config.poolSize || 5,
        autoReconnect: true,
        authSource: config.authSource && config.authSource,
        useNewUrlParser: true,
        auth: {
          user: config.user && config.user,
          password: config.password && config.password,
        },
      });
  }
}

module.exports = Mongo;
