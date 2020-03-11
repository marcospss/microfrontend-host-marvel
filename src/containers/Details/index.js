import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import LoaderAnimation from '../../components/LoaderAnimation';

import * as charactersActions from '../../store/actions/charactersActions';

const Details = ({ match, isLoading, actions, details }) => {
    const { params: { characterId } } = match;
    useEffect(() => {
        actions.loadDetails(characterId);
    }, [characterId]);

    const {
        data: { name, description, thumbnail }
      } = details;

    return (
        <>
        {isLoading && <LoaderAnimation />}
    <h2>{ name }</h2>
    {
        thumbnail &&
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
    }
    <p>{ description }</p>
        </>
    )
};

const mapStateToProps = ({ callStatus, details }) => ({
    isLoading: callStatus > 0,
    details,
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      actions: {
        loadDetails: bindActionCreators(charactersActions.loadDetails, dispatch),
      }
    };
  };

  Details.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
    actions: PropTypes.shape({
        loadDetails: PropTypes.func,
    }).isRequired,
    data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        // thumbnail: PropTypes.shape({
        //     path: PropTypes.string,
        //     extension: PropTypes.string,
        // }),
        thumbnail: PropTypes.object,
      }).isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Details);