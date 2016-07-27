var React = require('react');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
	render: function (){
		return (
			<MainContainer>
				<h1>Github Battle</h1>
				<p className="lead">Welcome to the Github Battle Arena</p>
				<Link to="/playerOne">
					<button type="button" className="btn btn-lg btn-success">Get Started</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;