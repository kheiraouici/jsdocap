var express = require('express');
var router = express.Router();
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const user = require('../models/user');

const service = require('../services/users');

const private = require('../middlewares/private');

router.get('/:id', service.getById);

router.post('/', private.checkJWT, service.add);

router.patch('/:id', private.checkJWT, service.update);

router.delete('/:id', private.checkJWT, service.delete);

router.post('/authenticate', service.authenticate);

module.exports = router;
