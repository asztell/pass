var express 	= require('express'),
	passport	= require('passport'),
	router 		= express.Router();

router.route('/google/callback')
	.get(passport.authenticate('google', {
		successRedirect: '/users/',
		failure: '/error/'
}));

router.route('/google')
	.get(passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/userinfo.profile',
				'https://www.googleapis.com/auth/userinfo.email']
}));

router.route('/twitter/callback')
	.get(passport.authenticate('twitter', {
		successRedirect: '/users/',
		failure: '/error/'
}));

router.route('/twitter')
	.get(passport.authenticate('twitter'));

router.route('/facebook/callback')
	.get(passport.authenticate('facebook', {
		successRedirect: '/users',
		failureRedirect: '/error'
}));

router.route('/facebook')
	.get(passport.authenticate('facebook', {
		scope: ['email']
}));

router.post('/login', 
	passport.authenticate('local', {
		failureRedirect: '/'
	}),
	function (req, res) {
		res.redirect('/users');
	}
);

// router.route('/local')
// 	.get(passport.authenticate('local', {
// 		successRedirect: '/users',
// 		failureRedirect: '/error'
// }));

module.exports = router;