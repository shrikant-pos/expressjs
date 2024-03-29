
var menupreparation = require('../models/menupreparation.model')
var queries = require('../queries/index.query')

module.exports.getmenupreparationByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await menupreparation.findOne(queries.common.getbyid(id)); //.select(queries.menupreparation.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getmenupreparations = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await menupreparation.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addmenupreparations = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        menupreparation.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletemenupreparations = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        menupreparation.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatemenupreparation = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        menupreparation.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
