import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as counterActions from '../../store/actions/charactersActions';

const Home = ({ counter, actions }) => (
	<>
		<h1>Home</h1>
		<button type="button" onClick={() => actions.counterIncrease(1)}>
			INCREASE
		</button>
		<button type="button" onClick={() => actions.counterDecrease(1)}>
			DECREASE
		</button>
		<h2>{counter}</h2>
	</>
);

const mapStateToProps = state => {
	return {
		counter: state.counter.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			counterIncrease: bindActionCreators(
				counterActions.counterIncrease,
				dispatch
			),
			counterDecrease: bindActionCreators(
				counterActions.counterDecrease,
				dispatch
			)
		}
	};
};

Home.propTypes = {
	counter: PropTypes.func.isRequired,
	actions: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
