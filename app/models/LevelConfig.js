const mongoose = require('mongoose');
const LevelConfigSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    config : {
        type: Object
    },
},{
    timestamps: true
})

module.exports = mongoose.model('LevelConfig',LevelConfigSchema);