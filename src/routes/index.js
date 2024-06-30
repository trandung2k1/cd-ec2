const user = require('./user.route');

const routes = (app) => {
    app.use('/api/users', user);
};

module.exports = routes;
