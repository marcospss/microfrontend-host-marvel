import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid } from './styles';

function ImageGrid({ data }) {
  return (
    <Container>
      <Grid>
        { 
            data && data.map(content => (
            <div
                key={content.id}
            >
                <img src={`${content.thumbnail.path}.${content.thumbnail.extension}`} alt={content.name} />
            </div>
            ))
        }
      </Grid>
    </Container>
  );
}

ImageGrid.propTypes = {
	// data: PropTypes.object.isRequired,
};

export default ImageGrid;
