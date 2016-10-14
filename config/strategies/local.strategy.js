var passport 		= require('passport'),
	LocalStrategy 	= require('passport-local').Strategy;
	db				= require(__dirname+'/db');

module.exports = function () {
	passport.use(new LocalStrategy( function (username, password, cb) {
		db.users.findByUsername(username, function(err, user) {
			if (err) { return cb(err); }
			if (!user) { return cb(null, false); }
			if (user.password != password) { return cb(null, false); }
			return cb(null, user);
		});
	}));
};