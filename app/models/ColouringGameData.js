const mongoose = require('mongoose');
const ColouringGameDataSchema = new mongoose.Schema({
    numberValue :  {
        type: Number
    },
    numbersInOperatorBubble : [
        {type: mongoose.Schema.Types.ObjectId,ref:'NumbersInOperatorBubble'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('ColouringGameData',ColouringGameDataSchema);