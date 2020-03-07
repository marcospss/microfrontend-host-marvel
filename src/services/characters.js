import axios from '../config/instanceAxios';

/**
 * Fetches lists of characters
 * @param int limit 
 * @param int offset 
 */
const fetchesListsCharacters = async (limit = 10, offset = 0) => {
    try {
        return await axios.get(`/characters?limit=${limit}&offset=${offset}`);
    } catch(error) {
        return error;
    }
};

/**
 * Fetches a single character by id
 * @param int characterId 
 */
const fetchesListsCharactersById = async characterId => {
    try {
        return await axios.get(`/characters/${characterId}`);
    } catch(error) {
        return error;
    }
};

export { fetchesListsCharacters, fetchesListsCharactersById };