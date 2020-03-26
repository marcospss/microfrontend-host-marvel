import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Grid } from './styles';

const ImageGrid = ({ data }) => {
  return (
    <Container>
      <Grid>
        {
        data.map(content => {
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
};

ImageGrid.defaultProps = {
  data: [],
}

ImageGrid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      thumbnail: PropTypes.object,
      name: PropTypes.string,
    })
  )
};

export default ImageGrid;
