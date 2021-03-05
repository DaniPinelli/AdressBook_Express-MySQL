const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get('/', contactController.list);

router.post('/add', contactController.save);

module.exports = router;