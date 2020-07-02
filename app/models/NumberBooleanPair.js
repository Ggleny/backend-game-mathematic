const mongoose = require('mongoose');
const NumberBooleanPairSchema = new mongoose.Schema({
    //Ej: 8-2 : 7,false - 9,false - 6,true
    numberValue :  {
        type: Number
    },
    booleanValue : {
        type: Boolean
    }
},{
    timestamps: true
})

module.exports = mongoose.model('NumberBooleanPair',NumberBooleanPairSchema);