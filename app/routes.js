const express = require('express');
const router = new express.Router;
const Game = require('./controllers/Game');
const LevelConfig = require('./controllers/LevelConfig');
const Player = require('./controllers/Player');
const Session = require('./controllers/Session');
//const Score = require('./controllers/');
router.get('/',(req,res)=>res.send('ok'));
// user routes
router.put('/game',Game.create);
router.get('/game',Game.find);
router.get('/game/:id/levels/', Game.findLevels);

router.get('/game/multiple/level/1', Game.findMultipleLevel1);
router.get('/game/multiple/level/2', Game.findMultipleLevel2);
router.get('/game/multiple/level/3', Game.findMultipleLevel3);

router.get('/game/eat/level/1', Game.findEatLevel1);
router.get('/game/eat/level/2', Game.findEatLevel2);
router.get('/game/eat/level/3', Game.findEatLevel3);


router.get('/game/painting/level/1', Game.findPaintLevel1);
router.get('/game/painting/level/2', Game.findPaintLevel2);
router.get('/game/painting/level/3', Game.findPaintLevel3);



router.post('/session/login',Session.login);
router.post('/session/logout',Session.logout);

router.post('/player/score',Player.savePoints);
router.get('/player/score',Player.getScore);

module.exports = router;