const mongoose = require('mongoose');
const NumbersInOperatorBubbleSchema = new mongoose.Schema({
    numbersInOperator :  [{
        type: Number
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('NumbersInOperatorBubble',NumbersInOperatorBubbleSchema);