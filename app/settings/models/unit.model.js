var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var unitSchema   = new Schema({
        code: {
        type: Number,
        required: 'code is required'
},
    title: {
        type: String,
        required: 'title is required'
},
    subunitcode: {
        type: Number
},
    subunitrate: {
        type: Number
},
    parentunitcode: {
        type: Number
},
    parentunitrate: {
        type: Number
},
    description: {
        type: String
}
    
});


module.exports = mongoose.model('unit', unitSchema);
