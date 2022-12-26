const express = require('express');

const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/product_lines', meController.storedCourses);
router.get('/stored/customers', meController.storedCustomers);



module.exports = router;