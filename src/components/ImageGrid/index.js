import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Grid } from './styles';

const ImageGrid = ({ data }) => (
  <Container>
    <Grid>
      {
      data && data.map(content => {
          const {
            id,
            thumbnail: { path, extension },
            name
          } = content;
          const linkMedia = `/details/${id}`;
          return (
            <figure key={id}>
              <Link to={linkMedia}>
                <img src={`${path}.${extension}`} alt={name} />
                <figcaption>{name}</figcaption>
              </Link>
            </figure>
          );
        })}
    </Grid>
  </Container>
);

ImageGrid.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default ImageGrid;
