const mongoose = require('mongoose');
const GameDataSchema = new mongoose.Schema({
    gameId: {
        type:String
    },
    levelId: {
        type:String
    },
    multipleChoiceGameData : [
        {type: mongoose.Schema.Types.ObjectId,ref:'MultipleChoiceGameData'}
    ],
    connectGameData : [
        {type: mongoose.Schema.Types.ObjectId,ref:'ConnectGameData'}
    ],
    colouringGameData : [
        {type: mongoose.Schema.Types.ObjectId,ref:'ColouringGameData'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('GameData',GameDataSchema);