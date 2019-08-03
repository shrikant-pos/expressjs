var express = require('express');
var router = express.Router();

//router.use('/user', require('./user.route'));
//router.use('/course', require('../../course/routes/index.route'));
//router.use('/bill', require('../../bill/routes/index.route'));
router.use('/user', require('../../user/routes/index.route'));
//router.use('/franchise', require('../../franchise/routes/index.route'));
//router.use('/menu', require('../../menu/routes/index.route'));
//router.use('/reminder', require('../../reminder/routes/index.route'));
//router.use('/setting', require('../../setting/routes/index.route'));
//router.use('/customer', require('../../customer/routes/index.route'));

router.get('/test', function(req,res) {
    try {  
        //condition = req.body;      
        //const result = await bill.find(condition);
        return res.json(req.body);        
    } catch (error) { 
        //next(error);
        return error;
    }    
});

module.exports = router;