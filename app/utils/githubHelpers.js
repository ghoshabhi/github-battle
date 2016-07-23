var axios = require('axios');

var CLIENT_ID = "CLIENT_ID";
var SECRET_KEY = "SECRET_KEY";
var param = "?client_id=" + CLIENT_ID + '&client_secret=' + SECRET_KEY
;
var getUserInfo = function (gitUserName){
	return axios.get('https://api.github.com/users/' + gitUserName + param)
}

var helpers = {
	getPlayersInfo : function(players){
		return axios.all(players.map(function (username){
			return getUserInfo(username)
		})).then(function (info){
			return info.map(function(user){
        //return only user data
        return user.data;
      })
		}).catch( function (err) {
      console.warn('Error in getPlayersInfo at guithubHelpers.js',err);
    })
	}
};

module.exports = helpers;