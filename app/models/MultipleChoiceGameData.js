const mongoose = require('mongoose');
const MultipleChoiceGameDataSchema = new mongoose.Schema({
    numbersInOperator :  [{ //Array de numeros que son los que estan en los operadores (ej en la foto: 8 y 2)
        type: Number  
    }],
    possibleAnswers : [
        {type: mongoose.Schema.Types.ObjectId,ref:'NumberBooleanPair'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('MultipleChoiceGameData',MultipleChoiceGameDataSchema);