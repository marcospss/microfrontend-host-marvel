import { INSTANCE, PARAMS } from '../settings';
/**
 * Fetches lists of characters
 * @param int limit 
 * @param int offset 
 */
const fetchesListsCharacters = async (offset = 0) => {
    try {
        const { data: { data } } = await INSTANCE.get(`/characters`, {
            params: {
                ...PARAMS,
                limit: 10,
                offset,
            }
        });
        return data;
    } catch(error) {
        return error;
    }
};

/**
 * Fetches a single character by id
 * @param int characterId 
 */
const fetchesListsCharactersById = async (characterId, offset = 0) => {
    try {
        const { data: { data } } = await INSTANCE.get(`/characters/${characterId}`, {
            params: {
                ...PARAMS,
                limit: 10,
                offset,
            }
        });
        return data;
    } catch(error) {
        return error;
    }
};



export { fetchesListsCharacters, fetchesListsCharactersById };