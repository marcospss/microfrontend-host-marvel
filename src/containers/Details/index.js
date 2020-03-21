import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoaderAnimation from '../../shared/components/LoaderAnimation';
import SeriesGrid from './components/SeriesGrid';
import FormEditCharacter from './components/FormEditCharacter'

import * as charactersActions from '../../store/actions/charactersActions';
import { Container, Header, Button } from './styles';



const Details = ({ match, isLoading, actions, details, series }) => {
    const { params: { characterId } } = match;
    const [ displayForm, setDisplayForm ] = useState(false);
    useEffect(() => {
      async function triggerActions() {
        await actions.loadDetails(characterId);
        await actions.loadSeries(characterId);
      };
      triggerActions();
    }, [actions, characterId]);

    const toggleDisplayForm = () => setDisplayForm(!displayForm);
    const {
        data: { name, description, thumbnail }
      } = details;
    const { data: { results:resultsSeries } } = series;
    return (
        <>
        {isLoading && <LoaderAnimation />}
        <Container>
        {
          !isLoading &&
          <>
          <Header>
          <Link to="/" title="Voltar para home">
                  Voltar para home
                </Link>
            <h2>{ name } </h2>
              {
                  thumbnail &&
                  <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
              }
              <p>{ description }</p>
              <p><Button data-testid="EditarPersonagem" onClick={() => toggleDisplayForm()}>Editar Personagem</Button></p>
          </Header>
          {
            displayForm &&
            <FormEditCharacter character={details} toggleDisplayForm={toggleDisplayForm} />
          }
          </>
        }
        </Container>
          {
            resultsSeries && <SeriesGrid data={resultsSeries} />
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