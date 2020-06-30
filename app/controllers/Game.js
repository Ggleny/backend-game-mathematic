const Game = require('../models/Game');

module.exports = {
    create : async (req, res) =>{
        const { name, description } = req.body;
        const game = await Game.create({
            name,
            bio
        })
        return res.send(game)
    },
    find : async (req, res) => {
        const game = await Game.find()
        return res.send(game)
    },
    findLevels : async (req, res) => {
        const { id } = req.params;
        const game = await Game.findById(id).populate('levels');
        res.send(game.levels);
    }
}
