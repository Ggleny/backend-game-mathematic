const mongoose = require('mongoose');
const LevelPlayerSchema = new mongoose.Schema({
    levelConfig:{
        type: mongoose.Schema.Types.ObjectId,ref:'LevelConfig'
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,ref:'Player'
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,ref:'Game'
    },
    score:{
        type: Number
    }
},{
    timestamps: true
})

module.exports = mongoose.model('LevelPlayer',LevelPlayerSchema);