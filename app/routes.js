const express = require('express');
const router = new express.Router;
const Game = require('./controllers/Game');
const Level = require('./controllers/Level');
const Player = require('./controllers/Player');
const Session = require('./controllers/Session');
//const Score = require('./controllers/');
router.get('/',(req,res)=>res.send('ok'));
// user routes
router.put('/game/create',Game.create);
router.get('/game/find',Game.find);
router.get('/game/:id/levels/', Game.findLevels);
// post routes
router.put('/lavel/create', Level.create);
router.get('/lavel/find/:id', Level.find);

router.put('/player/create',Player.create);
router.get('/player/find/:id', Player.find);

router.post('/session/login',Session.login);
router.post('/session/logout',Session.logout);

/*router.get('/player/:id/score/', Player.findScore);
router.put('/player/:id/score/', Player.putScore);

router.put('/player/create',Player.create);
router.get('/player/find/:id', Player.find);

*/



module.exports = router;