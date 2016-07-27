var axios = require('axios');

var CLIENT_ID = "CLIENT_ID";
var SECRET_KEY = "SECRET_KEY";
var param = "?client_id=" + CLIENT_ID + '&client_secret=' + SECRET_KEY
;
function getUserInfo (gitUserName){
	return axios.get('https://api.github.com/users/' + gitUserName + param);
}

function getRepos (gitUserName) {
	//fetch username repos
	return axios.get('https://api.github.com/users/' + gitUserName + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
	//calculate all the stars that the user has
	return repos.data.reduce(function (prev,current) {
		return prev + current.stargazers_count
	}, 0)
}

function getPlayersData (player) {
	//getRepos
	//getTotalStars
	//return object with that data
	return getRepos(player.login)
		.then(getTotalStars)
		.then( function (totalStars) {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		})
}

function calculateScores (players) {
	//return an array after applying an algorithm to decide winner
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]
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
	},
	battle : function(players){
		var playerOneData = getPlayersData(players[0]);
		var playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData,playerTwoData])
			.then(calculateScores)
			.catch(function (err) {
				console.warn('Error in getPlayersInfo :', err);
			})
	}
};

module.exports = helpers;