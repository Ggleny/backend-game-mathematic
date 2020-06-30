const mongoose = require('mongoose');
const ScoreSchema = new mongoose.Schema({
    score: {
        type:Number
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,ref:'Player'
    },
    game : {
        type: mongoose.Schema.Types.ObjectId,ref:'Game'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Score',ScoreSchema);