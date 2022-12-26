const Course = require('../models/Product')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class NewsController {

    //get news
    index(req, res) {
        res.render('news');
    }

    

    show(req, res) {
        res.send('NEWS DETAILS')
    }
}
module.exports = new NewsController;