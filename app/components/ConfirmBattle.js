var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props){
	return props.isLoading === true
			? <Loading speed={300} text='Loading' />
			: <MainContainer >
          <h1>Confirm Players </h1>
          <div className='col-sm-8 col-sm-offset-2'>
            <UserDetailsWrapper header="Player 1">
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header="PLayer 2">
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
          <div className='col-sm-8 col-sm-offset-2'>
          	<div style={styles.padding} className='col-sm-12'>
          		<button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
          			Initiate Battle
          		</button>
          	</div>
          	<div style={styles.padding} className='col-sm-12'>
          		<Link to='/playerOne'>
          			<button type="button" className="btn btn-lg btn-danger">
	          			Reselct Players
	          		</button>
          		</Link>
          	</div>
        	</div>
        </MainContainer>
}


ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}


module.exports = ConfirmBattle;
