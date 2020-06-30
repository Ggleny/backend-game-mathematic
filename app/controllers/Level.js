const Level = require('../models/Level');

module.exports = {
    create : async (req, res) =>{
        const { name, description,config } = req.body;
        const level = await Level.create({
            name,
            description,
            config,
        });

        return res.send(level)
    },
    find : async (req, res) => {
        const level = await Level.find()
        return res.send(level)
    },
}
