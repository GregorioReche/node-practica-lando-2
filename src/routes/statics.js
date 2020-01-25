const express = require('express');
const router = express.Router();
const controller = require('../controller/staticsController')

router.get('/', controller.index);

router.get('/acerca-de', controller.about);

router.get('/registro', controller.register);

router.get('/login', controller.login);

router.get('/register', controller.register);

module.exports = router;