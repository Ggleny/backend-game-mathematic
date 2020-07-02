const Game = require('../models/Game');
const LevelConfig = require('../models/LevelConfig');

module.exports = {
    create : async (req, res) =>{
        const { name, description, levelsConfig} = req.body;
        console.log("req.body",req.body);
        let gameConfig = {
            name,
            description
        }

        if(levelsConfig){
            let levels = await LevelConfig.create(levelsConfig);
            gameConfig.levelsConfig = levels.map(v=>v._id);
        }
        
        const game = await Game.create(gameConfig)
        return res.send(game)
    },
    find : async (req, res) => {
        const game = await Game.find().populate("levelsConfig")
        return res.send(game)
    },
    findLevels : async (req, res) => {
        const { id } = req.params;
        const game = await Game.findById(id).populate('levelsConfig');
        res.send(game.levels);
    }
}
