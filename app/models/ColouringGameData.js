const mongoose = require('mongoose');
const ColouringGameDataSchema = new mongoose.Schema({
    numberValue :  {
        type: Number //7
    },
    numbersInOperatorBubble : [ //ES UNA LISTA PORQUE: ES UNA LISTA DE CORAZONES (QUE UN CORAZON, ES UNA LISTA DE NUMEROS)
        {type: mongoose.Schema.Types.ObjectId,ref:'NumbersInOperatorBubble'} 
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('ColouringGameData',ColouringGameDataSchema);