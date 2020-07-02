const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    description: {
        type:String
    },
    levelsConfig : [
        {type: mongoose.Schema.Types.ObjectId,ref:'LevelConfig'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('Game',GameSchema);