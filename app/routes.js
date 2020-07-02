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
// post routes
router.put('/lavelConfig', LevelConfig.create);
router.get('/lavelConfig/find/:id', LevelConfig.find);

router.put('/player',Player.create);
router.get('/player/find/:id', Player.find);

router.post('/session/login',Session.login);
router.post('/session/logout',Session.logout);

/*router.get('/player/:id/score/', Player.findScore);
router.put('/player/:id/score/', Player.putScore);

router.put('/player/create',Player.create);
router.get('/player/find/:id', Player.find);

*/



module.exports = router;