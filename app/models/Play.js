const mongoose = require('mongoose');
const ScoreSchema = new mongoose.Schema({
    play: {
        type:Number
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,ref:'Player'
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,ref:'Game'
    },
    levelPlay:{
        type: mongoose.Schema.Types.ObjectId,ref:'LevelPlay'
    },
    scoreTotal:{
        type: Number,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Score',ScoreSchema);