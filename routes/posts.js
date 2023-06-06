const express = require('express');
const passport = require('passport');

const router=express.Router();

const PController = require('../controllers/postcontroller');

router.post('/createpost',passport.checkAuthentication,PController.createpost);

module.exports = router;