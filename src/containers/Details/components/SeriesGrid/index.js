import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Grid } from './styles';

const SeriesGrid = ({ data }) => (
  <Container>
    <Grid>
      {
      data.map(content => {
          const {
            id,
            thumbnail: { path, extension },
            title,
          } = content;
          const linkMedia = `/details/${id}`;
          return (
            <>
                <figure key={id}>
                <Link to={linkMedia}>
                    <img src={`${path}.${extension}`} alt={title} />
                    <figcaption>{title}</figcaption>
                </Link>
                </figure>
            </>
          );
        })}
    </Grid>
  </Container>
);

SeriesGrid.propTypes = {
  data: [],
};

SeriesGrid.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
		id: PropTypes.number,
		thumbnail: PropTypes.object,
		name: PropTypes.string,
  }).isRequired,
};

export default SeriesGrid;
