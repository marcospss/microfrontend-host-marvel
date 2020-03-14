import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ImageGrid from './components/ImageGrid';
import Button from './components/Button';
import Search from './components/Search';
import { Actions } from './styles';

import LoaderAnimation from '../../shared/components/LoaderAnimation';
import * as charactersActions from '../../store/actions/charactersActions';

const isFirstLoad = async (characters, actions) => {
  if (characters.isFirstLoad) {
    await actions.loadList();
  }
};

const Home = ({ isLoading, characters, actions }) => {
  
  useEffect(() => {
    isFirstLoad(characters, actions);
  }, []);
  
  const {
    data: { offset, total, results, filter }
  } = characters;

  const filterCharacters = (query) => {
      actions.filterList(query);
  }

  const showButtonLoadMore = total > offset;
  
  return (
    <>
      <Search triggerSearch={filterCharacters} filter={filter}/>
      <ImageGrid data={results} />
      <Actions>
        {isLoading && <LoaderAnimation />}
        {showButtonLoadMore && (
          <Button handleAction={actions.loadList} loading={isLoading}>
            Load More
          </Button>
        )}
      </Actions>
    </>
  );
};

const mapStateToProps = ({ callStatus, characters, nextPage }) => ({
  isLoading: callStatus > 0,
  characters,
  nextPage,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadList: bindActionCreators(charactersActions.loadList, dispatch),
      filterList: bindActionCreators(charactersActions.filterList, dispatch),
    }
  };
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  characters: PropTypes.shape({
	isFirstLoad: PropTypes.bool,
	data: PropTypes.shape({
      offset: PropTypes.number,
      limit: PropTypes.number,
      total: PropTypes.number,
      count: PropTypes.number,
      results: PropTypes.array,
      filter: PropTypes.string,
    }),
  }).isRequired,
  actions: PropTypes.shape({
	loadList: PropTypes.func,
	filterList: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
