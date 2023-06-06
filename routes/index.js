const express=require('express');

const router = express.Router();

const HPCont = require('../controllers/hpcontroller');

console.log('router acessed');

router.get('/',HPCont.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
module.exports=router;