const Customer = require('../models/Customer')
const { mongooseToObject } = require('../../util/mongoose');
class CustomerController {

    //get Course


    // get search

    show(req, res, next) {
        Customer.findOne({ slug: req.params.slug })
            .then((customers) => {
                res.render('customers/showCustomer', { customers: mongooseToObject(customers) });
            })
            .catch(next);
    }


    create(req, res, next) {
        res.render('customers/create');
    }

    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        const product_lines = new Customer(formData);
        product_lines.save();
        res.send('saved-customer');
        res.redirect('/me/stored/customers');
        // res.render('/me/stored/product_lines');
        // .catch(next);

    }

    edit(req, res, next) {
        Customer.findById(req.params.id)
            .then(customers => res.render('customers/edit', {
                customers: mongooseToObject(customers)
            }))
            .catch(next)
    }

    update(req, res, next) {
        // res.json(req.body);

        Customer.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/customers'))
            .catch(next);
    }

    destroy(req,res,next) {
        Customer.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CustomerController;