const Game = require('../models/Game');
const LevelConfig = require('../models/LevelConfig');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

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
    },
    findMultipleLevel1: async (req, res) => {
        var data = [];
        for (let i = 0; i < 3; i++) {
            let n1 = getRandomInt(1,10);
            let n2 = getRandomInt(1,10);
            let rta = n1+n2;
            let options = [rta];
            for (let j = 0; options.length<4 ; j++) {
              let op = getRandomInt(1,rta+10);
              if(options.indexOf(op)===-1){
                options.push(op);
              }
            }
            options = shuffle(options)
            options = options.map(v=>{
                return {
                    "rta":v,
                    "right":v==rta
                }
            });
            data.push({
                n1,
                n2,
                operation:"+",
                options
            });
        }
        res.send(data);
    },

    findMultipleLevel2: async (req, res) => {
        var data = [];
        for (let i = 0; i < 3; i++) {
            let n1 = getRandomInt(10,99);
            let n2 = getRandomInt(1,n1);
            let rta = n1-n2;
            let options = [rta];
            for (let j = 0; options.length<4 ; j++) {
              let op = getRandomInt(1,rta+10);
              if(options.indexOf(op)===-1){
                options.push(op);
              }
            }
            options = shuffle(options)
            options = options.map(v=>{
                return {
                    "rta":v,
                    "right":v==rta
                }
            });
            data.push({
                n1,
                n2,
                operation:"-",
                options
            });
        }
        res.send(data);
    },

    findMultipleLevel3: async (req, res) => {
        var data = [];
        for (let i = 0; i < 3; i++) {
            let n1 = getRandomInt(1,10);
            let n2 = getRandomInt(1,10);
            let rta = n1*n2;
            let options = [rta];
            for (let j = 0; options.length<4 ; j++) {
                let op = getRandomInt(1,rta+10);
                if(options.indexOf(op)===-1){
                  options.push(op);
                }
            }
            options = shuffle(options)

            options = options.map(v=>{
              console
                return {
                    "rta":v,
                    "right":v==rta
                }
            });
            data.push({
              n1,
              n2,
              operation:"x",
              options
          });
        }
        res.send(data);
    },
    

    findEatLevel1: async (req, res) => {
        var data = [];
        for (let i = 0; i < 3; i++) {
            let n1 = getRandomInt(1,10);
            let n2 = getRandomInt(1,10);
            data.push({
                value:`${n1} + ${n2}`,
                rta:n1+n2,
            });
        }
        res.send(data);
    },


    findEatLevel2: async (req, res) => {
        var data = [];
        for (let i = 0; i < 3; i++) {
            let n1 = getRandomInt(10,99);
            let n2 = getRandomInt(1,n1);
            data.push({
                value:`${n1} - ${n2}`,
                rta:n1-n2,
            });
        }
        res.send(data);
    },

    findEatLevel3: async (req, res) => {
        var data = [];
        for (let i = 0; i < 3; i++) {
            let n1 = getRandomInt(1,30);
            let n2 = getRandomInt(1,30);
            data.push({
                value:`${n1} x ${n2}`,
                rta:n1*n2,
            });
        }
        res.send(data);
    },

    findPaintLevel1: async (req, res) => {
        const data = [
            {
                "numbers":[7,4],
                "operation":"SUMA",
                "rta":11,
                "id":2,
            },{
               "numbers":[3,7],
               "operation":"SUMA",
               "rta":10,
               "id":2,
           },{
               "numbers":[1,9],
               "operation":"SUMA",
               "rta":10,
               "id":2,
           },{
            "numbers":[5,5],
            "operation":"SUMA",
            "rta":10,
            "id":2,
            },{
               "numbers":[3,1],
               "operation":"SUMA",
               "rta":4,
               "id":2,
           },{
               "numbers":[2,2],
               "operation":"SUMA",
               "rta":4,
               "id":2,
           },{
            "numbers":[8,2],
            "operation":"SUMA",
            "rta":10,
            "id":2,
        },{
               "numbers":[1,3],
               "operation":"SUMA",
               "rta":4,
               "id":2,
           },{
               "numbers":[0,4],
               "operation":"SUMA",
               "rta":4,
               "id":2,
           },{
               "numbers":[2,9],
               "operation":"SUMA",
               "rta":11,
               "id":2,
           },{
            "numbers":[3,11],
            "operation":"SUMA",
            "rta":14,
            "id":2,
            },{
               "numbers":[1,10],
               "operation":"SUMA",
               "rta":11,
               "id":2,
           },{
               "numbers":[8,3],
               "operation":"SUMA",
               "rta":11,
               "id":2,
           },{
               "numbers":[2,12],
               "operation":"SUMA",
               "rta":14,
               "id":2,
           },{
               "numbers":[6,8],
               "operation":"SUMA",
               "rta":14,
               "id":2,
           },{
               "numbers":[9,5],
               "operation":"SUMA",
               "rta":14,
               "id":2,
           }
        ]
        //14,11,4,10
        res.send(data);
    },


    findPaintLevel2: async (req, res) => {
        const data = [  {
            numbers: [118,74],
            operation: "RESTA",
            rta: 44,
            id: 1,
          },
          {
            numbers: [97,53],
            operation: "RESTA",
            rta: 44,
            id: 2,
          },
          {
            numbers: [80,36],
            operation: "RESTA",
            rta: 44,
            id: 3,
          }, {
            numbers: [100,30],
            operation: "RESTA",
            rta: 70,
            id: 1,
          },
          {
            numbers: [110,40],
            operation: "RESTA",
            rta: 70,
            id: 2,
          },
          {
            numbers: [112,42],
            operation: "RESTA",
            rta: 70,
            id: 3,
          },{
            numbers: [60,8],
            operation: "RESTA",
            rta: 52,
            id: 1,
          },  {
            numbers: [100,66],
            operation: "RESTA",
            rta: 24,
            id: 1,
          },
          {
            numbers: [30,6],
            operation: "RESTA",
            rta: 24,
            id: 2,
          },
          {
            numbers: [200,166],
            operation: "RESTA",
            rta: 24,
            id: 3,
          },
          {
            numbers: [75,23],
            operation: "RESTA",
            rta: 52,
            id: 2,
          },
          {
            numbers: [88,36],
            operation: "RESTA",
            rta: 52,
            id: 3,
          }];
        res.send(data);
    },

    findPaintLevel3: async (req, res) => {
        const data = [ {
            numbers: [35,2],
            operation: "MULTIPLICACION",
            rta: 70,
            id: 1,
          },
          {
            numbers: [14,5],
            operation: "MULTIPLICACION",
            rta: 70,
            id: 2,
          },
          {
            numbers: [10,7],
            operation: "MULTIPLICACION",
            rta: 70,
            id: 3,
          }, {
            numbers: [40,2],
            operation: "MULTIPLICACION",
            rta: 80,
            id: 1,
          },
          {
            numbers: [16,5],
            operation: "MULTIPLICACION",
            rta: 80,
            id: 2,
          },
          {
            numbers: [8,10],
            operation: "MULTIPLICACION",
            rta: 80,
            id: 3,
          }, {
            numbers: [5,8],
            operation: "MULTIPLICACION",
            rta: 40,
            id: 1,
          },   {
            numbers: [15,2],
            operation: "MULTIPLICACION",
            rta: 30,
            id: 1,
          },
          {
            numbers: [10,3],
            operation: "MULTIPLICACION",
            rta: 30,
            id: 2,
          },
          {
            numbers: [5,6],
            operation: "MULTIPLICACION",
            rta: 30,
            id: 3,
          },
          {
            numbers: [20,2],
            operation: "MULTIPLICACION",
            rta: 40,
            id: 2,
          },
          {
            numbers: [10,4],
            operation: "MULTIPLICACION",
            rta: 40,
            id: 3,
          }];

        res.send(data);
    },

}
