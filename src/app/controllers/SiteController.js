const Course = require('../models/Product')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    //get Site
    index(req, res) {
        Course.find({})
            .then(product_lines => {

                res.render('home', {
                    product_lines: mutipleMongooseToObject(product_lines)
                });
            })
            .catch(error => next(error));

    }

    // get search

    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController;