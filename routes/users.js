const express=require('express');

const router=express.Router();

const passport = require('passport');
const UController = require('../controllers/usercontroller');


console.log('router user acessed');

// for local auth
// router.get('/sign-up',UController.sign_up);
// router.get('/sign-in',UController.sign_in);
// router.get('/profile',UController.profile);
// router.get('/sign-out',UController.signOut);
// router.post('/create',UController.create);
// router.post('/createSession',UController.createSession);



router.get('/profile',passport.checkAuthentication,UController.profile);
router.get('/sign-up',UController.sign_up);
router.get('/sign-in',UController.sign_in);
router.post('/create',UController.create);
router.post('/createSession',passport.authenticate('local',{failureRedirect:'/users/sign-in'},),UController.create);
router.get('/sign-out',UController.signOut);

module.exports = router;