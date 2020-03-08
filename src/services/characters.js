import { INSTANCE, PARAMS } from '../settings';
/**
 * Fetches lists of characters
 * @param int limit 
 * @param int offset 
 */
async function fetchesListsCharacters(offset = 0) {
    try {
        const { data: { data } } = await INSTANCE.get(`/characters`, {
            params: {
                ...PARAMS,
                limit: 10,
                offset
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
const fetchesListsCharactersById = async characterId => {
    try {
        const data = await INSTANCE.get(`/characters/${characterId}`, {
            params: {
                ...PARAMS,
            }
        });
        return data;
    } catch(error) {
        return error;
    }
};

export { fetchesListsCharacters, fetchesListsCharactersById };