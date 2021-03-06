const Player = require('../models/Player');


module.exports = {
    login: async function(req,res){
        console.log("body",req.body); 
        const { name, lastname , classroom} = req.body;
        const nickname = `${name.trim()}_${lastname.trim()}_${classroom.trim()}`;
        const player = await Player.create({
            nickname,
            name,
            lastname,
            classroom,
        });

        if(!player) {
            res.json({"success" : false,"message" : "Login failed ! Please register"});
        } else {
            req.session.key = player;
            player.success = true;
            res.json(player);
        }
    },

    logout: async function(req,res){
        req.session.destroy(err => {
            if (err) {
                return res.send({ error: 'Logout error' })
            }
            res.clearCookie();
            
            return res.send({ 'clearSession': 'success' })
        })
    },
    
}