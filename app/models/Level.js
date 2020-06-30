const mongoose = require('mongoose');
const LevelSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    description: {
        type:String
    },
    config : {
        type: Object
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Level',LevelSchema);