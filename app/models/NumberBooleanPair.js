const mongoose = require('mongoose');
const NumberBooleanPairSchema = new mongoose.Schema({
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