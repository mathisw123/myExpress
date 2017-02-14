/**
 * Created by mathiswan on 2017-02-14.
 */

var express = require('express');
var router = express.Router();


router.get('/user/list', function(req, res, next){
    res.jsonp([{"name":"tom","age":6},{"name":"sam","age":7},{"name":"kim","age":8}]);
});

module.exports = router;
