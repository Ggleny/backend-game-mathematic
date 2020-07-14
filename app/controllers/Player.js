const Player = require('../models/Player');
const PlayerGame = require('../models/PlayerGame');
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
    getScore:async (req,res)=>{
        const { id, level, game } = req.query;
        console.log("getScore",id,level,game);
        let criteria = {};
        if(game) criteria.game = game;
        if(level) criteria.level = level;
        if(id) criteria.player = id;

        let data = await PlayerGame.find(criteria)
        res.send(data);
    },
    savePoints: async (req,res)=>{
        const { id, level , points, game } = req.body;
        console.log(id,level,points);
        try{
            let player = await Player.findById(id);
            if(player){
                let criteria = {
                    player:player._id,
                    level,
                    game
                };
                let scoreLevel = await PlayerGame.findOne(criteria);
                if(scoreLevel){
                    let playerGame = await PlayerGame.updateOne(
                        criteria,
                        { $set: { score:points } }, 
                        (e,result)=>{
                            if(e){
                                console.log("Update One Error",e);
                                return res.status(500).send("Internal Error")                
                            }else{
                                return res.send(result);             
                            }
                        }
                    );
                }else{
                    criteria.score = points;
                    let playerGame = await PlayerGame.create(criteria);
                    return res.send(playerGame);
                }
            }else{
                res.status(404).send("Player not found")
            }
        }catch(e){
            console.log("ERROR",e);
            res.send(e);
        }
    }
}
