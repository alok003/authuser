const express = require('express');
const passport = require('passport');

const router=express.Router();

const CController = require('../controllers/commentcontroller');

router.post('/createcomment',passport.checkAuthentication,CController.createcomment);

module.exports = router;