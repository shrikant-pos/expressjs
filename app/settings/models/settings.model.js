var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var settingsSchema   = new Schema({
        
});


module.exports = mongoose.model('settings', settingsSchema);
