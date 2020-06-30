const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    description: {
        type:String
    },
    levels : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Level'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('Game',GameSchema);