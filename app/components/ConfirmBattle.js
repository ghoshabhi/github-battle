var React = require('React');
var styles = require('../styles');
var PropTypes = React.PropTypes;

function puke(object){
  return <pre>{JSON.stringify(object,null,'')}</pre>
}

function ConfirmBattle(props){
	return props.isLoading === true
			? <p> Loading.. Please wait! </p>
			: <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg} >
          <h1>Confirm Players </h1>

          <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-6'>
              <p className='lead'>Player 1</p>
                {puke(props.playersInfo[0])}
            </div>
            <div className='col-sm-6'>
              <p className='lead'>Player 2</p>
                {puke(props.playersInfo[1])}
            </div>
          </div>
          <div className='col-sm-8 col-sm-offset-2'>
          	<div className='col-sm-12'>
          		INITIATE BATTLE BUTTON
          	</div>
          	<div className='col-sm-12'>
          		LINK TO /PLAYERONE
          	</div>
        </div>
}


ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}


module.exports = ConfirmBattle;