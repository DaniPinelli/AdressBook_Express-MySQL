const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

//Read
router.get('/', contactController.list);

//Create
router.post('/add', contactController.save);

//Update
router.get('/update/:id', contactController.edit);
router.post('/update/:id', contactController.update);

//Delete
router.get('/delete/:id', contactController.delete);



module.exports = router;