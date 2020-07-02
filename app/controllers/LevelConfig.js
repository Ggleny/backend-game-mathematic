const LevelConfig = require('../models/LevelConfig');

module.exports = {
    create : async (req, res) =>{
        const { name, description,config } = req.body;
        const level = await LevelConfig.create({
            name,
            description,
            config,
        });

        return res.send(level)
    },
    find : async (req, res) => {
        const level = await LevelConfig.find()
        return res.send(level)
    },
}
