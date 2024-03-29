
var billcustomer = require('../models/billcustomer.model')
var queries = require('../queries/index.query')

module.exports.getbillcustomerByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await billcustomer.findOne(queries.common.getbyid(id)); //.select(queries.billcustomer.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getbillcustomers = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await billcustomer.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addbillcustomers = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        billcustomer.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletebillcustomers = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        billcustomer.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatebillcustomer = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        billcustomer.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
