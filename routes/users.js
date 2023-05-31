const express=require('express');

const router=express.Router();
const UController = require('../controllers/usercontroller');

console.log('router user acessed');


router.get('/sign-up',UController.sign_up);
router.get('/sign-in',UController.sign_in);
router.get('/profile',UController.profile);
router.get('/sign-out',UController.signOut);
router.post('/create',UController.create);
router.post('/createSession',UController.createSession);

module.exports = router;