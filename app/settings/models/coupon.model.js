var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var couponSchema   = new Schema({
        code: {
        type: Number,
        required: 'code is required'
},
    title: {
        type: String,
        required: 'title is required'
},
    discountrate: {
        type: Number,
        required: 'discountrate is required'
},
    validfrom: {
        type: Number,
        required: 'validfrom is required'
},
    validto: {
        type: Number,
        required: 'validto is required'
},
    ispercent: {
        type: Boolean,
        required: 'ispercent is required'
}
    
});


module.exports = mongoose.model('coupon', couponSchema);
