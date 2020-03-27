import React from 'react';

import { Container } from './styles';
import imgPageNotFound from '../../assets/images/page-not-found.png';

const PageNotFound = () => (
    <Container>
        <img src={imgPageNotFound} alt="Page Not Found" />
    </Container>
);

export default React.memo(PageNotFound);