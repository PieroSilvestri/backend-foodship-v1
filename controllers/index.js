var express = require('express')
  , router = express.Router();

var path = "/api/v1";

router.use(path + '/users', require('./users'));
router.use(path + '/posts', require('./posts'));
router.use(path + '/products', require('./products'));

  
module.exports = router;