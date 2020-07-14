const mongoose = require('mongoose');
const ScoreSchema = new mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,ref:'Player'
    },
    game: {
        type: String
    },
    level:{
        type: String
    },
    score:{
        type: Number,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('PlayerGame',ScoreSchema);