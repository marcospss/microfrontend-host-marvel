import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonAction } from './styles';

const Button = ({ children, loading, handleAction }) => (
    <ButtonAction type="button" disabled={loading} onClick={() => handleAction()}>
        { loading ? 'Loading...' : children }
    </ButtonAction>
);

Button.defaultProps = {
    loading: false,
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	handleAction: PropTypes.func.isRequired,
};

export default Button;
