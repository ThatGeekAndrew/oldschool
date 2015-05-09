var express = require('express');
var router = express.Router();
appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'RuneScape 2007 Server - Play Old School RS',
  	facebook: '//www.facebook.com/OfficialOldSchoolRunescape',
  	twitter: '//twitter.com/oldschoolrs',
  	youtube: '//www.youtube.com/user/OldSchoolRSCommunity',
  	rss: '//services.runescape.com/m=news/latest_news.rss?oldschool=true',
  	terms: '//www.jagex.com/g=runescape/terms/terms.ws',
  	privacy: '//www.jagex.com/g=runescape/privacy/privacy.ws',
  	cookies: '//www.jagex.com/g=runescape/terms/cookies.ws',
  	jagex: '//www.jagex.com/'
  });
});

/* GET episodes page. */
router.get('/select', function(req, res) {
  res.render('player', {
  	title: 'Choose your world',
  	world: '1-78' //generate array for worlds
  });
});


module.exports = router;
