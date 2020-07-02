const mongoose = require('mongoose');
const ConnectGameDataSchema = new mongoose.Schema({
    numbersInOperator :  [{ //Ej en la foto es 7 y 6
        type: Number 
    }],
    answer : {
        type: Number //Ej para el chanchito ese seria 13
    }
},{
    timestamps: true
})

module.exports = mongoose.model('ConnectGameData',ConnectGameDataSchema);