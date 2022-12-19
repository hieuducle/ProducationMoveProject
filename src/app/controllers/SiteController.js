const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    //get Site
    index(req, res) {
        Course.find({})
            .then(courses => {

                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
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