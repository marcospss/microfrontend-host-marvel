import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Header } from './styles';

const SeriesGrid = ({ data }) => (
  <Container>
    <Header>
      Series
    </Header>
    <Grid>
      {data.map(content => {
        const {
          id,
          thumbnail: { path, extension },
          title
        } = content;

        return (
            <figure key={id}>
              <img src={`${path}.${extension}`} alt={title} />
              <figcaption>{title}</figcaption>
            </figure>
        );
      })}
    </Grid>
  </Container>
);

SeriesGrid.propTypes = {
  data: []
};

SeriesGrid.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
    id: PropTypes.number,
    thumbnail: PropTypes.object,
    name: PropTypes.string
  }).isRequired
};

export default SeriesGrid;
