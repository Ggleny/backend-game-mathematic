const mongoose = require('mongoose');
const MultipleChoiceGameDataSchema = new mongoose.Schema({
    numbersInOperator :  [{
        type: Number
    }],
    possibleAnswers : [
        {type: mongoose.Schema.Types.ObjectId,ref:'NumberBooleanPair'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('MultipleChoiceGameData',MultipleChoiceGameDataSchema);