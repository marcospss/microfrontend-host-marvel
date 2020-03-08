import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ImageGrid from '../../components/ImageGrid';
import Button from '../../components/Button';
import LoaderAnimation from '../../components/LoaderAnimation';
import { Actions } from './styles';

import * as charactersActions from '../../store/actions/charactersActions';

const Home = ({ isLoading, characters, actions }) => {
	useEffect(() => {
		// actions.loadList();
	  }, []);
	  const { data:{ results }} = characters;
	return (
		<>
			<ImageGrid data={results} />
			<Actions>
				{
					isLoading && <LoaderAnimation />
				}
				<Button 
					handleAction={actions.loadList}
					loading={isLoading}
				>
					Load More
				</Button>
			</Actions>
		</>
	);
};

const mapStateToProps = ({ callStatus, characters }) => ({
    isLoading: callStatus > 0,
    characters,
});

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			loadList: bindActionCreators(
				charactersActions.loadList,
				dispatch
			),
		}
	};
};

Home.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	// characters: PropTypes.object.isRequired,
	actions: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
