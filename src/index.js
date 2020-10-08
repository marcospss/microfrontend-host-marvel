import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import App from './App';

window.renderMarvel = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountMarvel = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};