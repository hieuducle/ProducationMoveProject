const Course = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {

    //get Course


    // get search

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((product_lines) => {
                res.render('product_lines/show', { product_lines: mongooseToObject(product_lines) });
            })
            .catch(next);
    }


    create(req, res, next) {
        res.render('product_lines/create');
    }

    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        const product_lines = new Course(formData);
        product_lines.save();
        res.send('saved-courses');
        res.redirect('/me/stored/product_lines');
        // res.render('/me/stored/product_lines');
        // .catch(next);

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(product_lines => res.render('product_lines/edit', {
                product_lines: mongooseToObject(product_lines)
            }))
            .catch(next)
    }

    update(req, res, next) {
        // res.json(req.body);

        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/product_lines'))
            .catch(next);
    }

    destroy(req,res,next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CourseController;