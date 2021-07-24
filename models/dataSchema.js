var mongoose=require('mongoose');
var personSchema=mongoose.Schema({
    name:{type:String},
    Description:{type:String},
    size:{type:Number}
});
module.exports=mongoose.model('person',personSchema);