const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {

    //get Course


    // get search

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }


    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        const course = new Course(formData);
        course.save();

        res.send('saved');

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
        
    }

    update(req, res, next) {
        // res.json(req.body);
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
        
    }

    destroy(req,res,next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CourseController;