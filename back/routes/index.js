const express = require('express');
const router = express.Router();
const indexCtrl = require('../controller/controller')



router.get('/', indexCtrl.gethome);


module.exports = router;