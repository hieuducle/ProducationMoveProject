const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./product_lines');
const customersRouter = require('./customers');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/product_lines', coursesRouter);
    app.use('/customers', customersRouter);


    app.use('/', siteRouter);
}

module.exports = route;