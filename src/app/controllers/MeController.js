const Course = require('../models/Product')
const Customer = require('../models/Customer')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {

    // get /me/stored/courses

    storedCourses(req, res,next) {
        Course.find({})
            .then(product_lines => res.render('me/stored-product_lines', {
                product_lines: mutipleMongooseToObject(product_lines)
            }) )
            .catch(next)
    }

    storedCustomers(req, res,next) {
        Customer.find({})
            .then(customers => res.render('me/stored-customers', {
                customers: mutipleMongooseToObject(customers)
            }) )
            .catch(next)
    }
}
module.exports = new MeController();