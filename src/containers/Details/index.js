import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoaderAnimation from '../../shared/components/LoaderAnimation';
import SeriesGrid from './components/SeriesGrid';

import * as charactersActions from '../../store/actions/charactersActions';
import { Container, Header } from './styles';

const Details = ({ match, isLoading, actions, details, series }) => {
    const { params: { characterId } } = match;
    useEffect(() => {
        actions.loadDetails(characterId);
        actions.loadSeries(characterId);
    }, [characterId]);

    const {
        data: { name, description, thumbnail }
      } = details;
    const { data: { results } } = series;
    return (
        <>
        {isLoading && <LoaderAnimation />}
        <Container>
        {
          !isLoading &&
          <Header>
            <h2>{ name }</h2>
              {
                  thumbnail &&
                  <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} width="280" />
              }
              <p>{ description }</p>
              <p>
                <Link to="/" className="link-action">
                  Back Home
                </Link>
              </p>
          </Header>
        }
        </Container>
          {
            results && <SeriesGrid data={results} />
          }
        </>
    )
};

const mapStateToProps = ({ callStatus, details, series }) => ({
    isLoading: callStatus > 0,
    details,
    series,
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      actions: {
        loadDetails: bindActionCreators(charactersActions.loadDetails, dispatch),
        loadSeries: bindActionCreators(charactersActions.loadSeries, dispatch),
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
        loadSeries: PropTypes.func,
    }).isRequired,
    details: PropTypes.shape({
      data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.shape({
            path: PropTypes.string,
            extension: PropTypes.string,
        }),
      })
    }).isRequired,
    series: PropTypes.shape({
      data: PropTypes.shape({
          results: PropTypes.array,
        }),
    }).isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Details);