var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var configSchema   = new Schema({
        inventorywarningpercent: {
        type: Number,
        required: 'inventorywarningpercent is required'
}
    
});


module.exports = mongoose.model('config', configSchema);
