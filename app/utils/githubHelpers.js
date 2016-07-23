var axios = require('axios');

var ID = "cd6e07487ca4ca74c80b";
var SECRET_KEY = "03670fac822092b42b126861b9ae5883288b8a85";
var param = "?client_id=" + ID + '&client_secret=' + SECRET_KEY
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