var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var reminderCategorySchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    code: {
        type: String,
        required: 'code is required'
},
    description: {
        type: String
}
    
});


module.exports = mongoose.model('reminderCategory', reminderCategorySchema);
