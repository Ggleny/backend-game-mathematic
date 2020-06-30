const Player = require('../models/Player');

module.exports = {
    create : async (req, res) =>{
        const { name, lastname , classroom } = req.body;
        const nickname = `${name.trim()}_${lastname.trim()}_${classroom.trim()}`;
        const player = await Player.create({
            nickname,
            name,
            lastname,
            classroom,
        });

        return res.send(player);
    },
    find : async (req, res) => {
        const player = await Player.find()
        return res.send(player)
    },
}
