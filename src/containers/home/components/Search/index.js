import React from 'react';
import PropTypes from 'prop-types';

import { Form, Fieldset, Input } from './styles';

const Search = ({ triggerSearch, filter }) => {
  const onSubmit = event => {
    event.preventDefault();
  };
  return (
    <Form role="search" onSubmit={onSubmit}>
      <Fieldset>
        <legend>Search Character</legend>
        <Input
          onChange={e => triggerSearch(e.currentTarget.value)}
          type="text"
          name="query"
          id="query"
          maxLength="30"
          value={filter}
        />
      </Fieldset>
    </Form>
  );
};

Search.propTypes = {
  filter: null,
};

Search.propTypes = {
  triggerSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Search;
