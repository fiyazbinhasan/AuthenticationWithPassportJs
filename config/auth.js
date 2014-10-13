/**
 * Created by Fiyaz on 10/13/2014.
 */
module.exports = {

    'facebookAuth' : {
        'clientID' 		: 'your-secret-clientID-here', // your App ID
        'clientSecret' 	: 'your-client-secret-here', // your App Secret
        'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey' 		: 'your-consumer-key-here',
        'consumerSecret' 	: 'your-client-secret-here',
        'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID' 		: '349393242159-riqntilsj039e6573r71mccqmjhi44ht.apps.googleusercontent.com',
        'clientSecret' 	: 'tcUkaMHbNCscP7N-eZP5a20b',
        'callbackURL' 	: 'http://127.0.0.1:3000/auth/google/callback'
    }

};
