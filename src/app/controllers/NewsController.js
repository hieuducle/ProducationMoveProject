const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose');
class NewsController {

    //get news
    index(req,res) {
        res.render('news');
    }

    // render database
    // index(req,res) {
    //     Course.find({})
    //         .then(courses => { 
                
    //             res.render('home', {
    //                 courses: mutipleMongooseToObject(courses)
    //             });
    //         })
    //         .catch(error => next(error));

    // }

    // get news:slug

    show(req,res) {
        res.send('NEWS DETAILS')
    }
}
module.exports = new NewsController;