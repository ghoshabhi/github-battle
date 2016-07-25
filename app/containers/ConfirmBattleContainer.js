var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState : function(){
		return {
			isLoading: true,
			playersInfo: []
		}
	},

	componentDidMount: function(){
		var query = this.props.location.query;
		//Fetch info from Github and then update state
		console.log('QUERY: ', query);
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				//recieve players info
				console.log('PLAYERS DATA', players);
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},

	handleInitiateBattle: function (){
		console.log('handleInitiateBattle');
		this.context.router.push({
			path: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	},

	render : function(){
		return (
			<ConfirmBattle
				isLoading = {this.state.isLoading}
				playersInfo = {this.state.playersInfo}
				onInitiateBattle = {this.handleInitiateBattle} />
		)
	}
});

module.exports = ConfirmBattleContainer;