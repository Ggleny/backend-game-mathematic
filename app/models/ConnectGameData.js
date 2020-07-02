const mongoose = require('mongoose');
const ConnectGameDataSchema = new mongoose.Schema({
    numbersInOperator :  [{
        type: Number
    }],
    answer : {
        type: Number
    }
},{
    timestamps: true
})

module.exports = mongoose.model('ConnectGameData',ConnectGameDataSchema);