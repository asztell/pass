var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
	passport.use(new GoogleStrategy({
	    clientID: '918622299440-uvr163j4u4emp646bvad7e5n3e6bfb2p.apps.googleusercontent.com',
	    clientSecret: 'lw2UVSKrha-J7QVgjtxy-rFJ',
	    // needs to change when deployed
	    callbackURL: 'http://localhost:3000/auth/google/callback'
	  // callbackURL: 'https://asztell.github.io/zombie-apocalypse/auth/google/callback',
	  }
	  ,function(req, accessToken, refreshToken, profile, done) {
	    var user = {};

	    user.email = profile.emails[0].value;
	    user.image = profile._json.image.url;
	    user.displayName = profile.displayName;

	    user.google = {};
	    user.google.id = profile.id;
	    user.google.token = accessToken;

	    done(null, user);
	  }
	));
};