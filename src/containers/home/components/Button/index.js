import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonAction } from './styles';

const Button = ({ children, dataTestId, loading, handleAction }) => (
    <ButtonAction data-testid={dataTestId} disabled={loading} onClick={() => handleAction()}>
        { loading ? 'Loading...' : children }
    </ButtonAction>
);

Button.defaultProps = {
    loading: false,
    dataTestId: null,
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	dataTestId: PropTypes.string,
	loading: PropTypes.bool,
	handleAction: PropTypes.func.isRequired,
};

export default React.memo(Button);
