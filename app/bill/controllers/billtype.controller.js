
var billtype = require('../models/billtype.model')
var queries = require('../queries/index.query')

module.exports.getbilltypeByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await billtype.findOne(queries.common.getbyid(id)); //.select(queries.billtype.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getbilltypes = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await billtype.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addbilltypes = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        billtype.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletebilltypes = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        billtype.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatebilltype = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        billtype.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
