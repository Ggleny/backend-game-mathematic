const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    nickname :{
        type:String,
        required: 'Completa tu nickname!',
        lowercase: true,
        trim:true,
    },
    name :{
        type:String,
        required: 'Completa tu nombre!',
        lowercase: true,
        trim:true,
    },
    lastname: {
        type:String,
        required: 'Completa tu apellido!',
        lowercase: true,
        trim:true,
    },
    classroom: {
        type:String,
        required: 'Elige tu salon',
        lowercase: true,
        trim:true,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Player',PlayerSchema);