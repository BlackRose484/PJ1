const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/stored/courses', MeController.stored);
router.get('/trash/courses', MeController.trash);

module.exports = router;
