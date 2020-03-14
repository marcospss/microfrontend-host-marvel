/**
 * FETCHES LISTS CHARACTERS
 */
let listsCharacters = {};
const setListsCharacters = data => {
  listsCharacters = data;
};

const fetchesListsCharacters = async () => {
  return { listsCharacters };
};

/**
 * FETCHES CHARACTERS BY ID
 */
let charactersById = {};
const setCharactersById = data => {
  charactersById = data;
};

const fetchesCharactersById = async () => {
  return { charactersById };
};

/**
 * FETCHES LISTS CHARACTERS
 */
let seriesCharactersById = {};
const setSeriesCharactersById = data => {
  seriesCharactersById = data;
};

const fetchesSeriesCharactersById = async () => {
  return { seriesCharactersById };
};

export {
  fetchesListsCharacters,
  setListsCharacters,
  fetchesCharactersById,
  setCharactersById,
  fetchesSeriesCharactersById,
  setSeriesCharactersById,
};
