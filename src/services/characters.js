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
const fetchesCharactersById = async (characterId, offset = 0) => {
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

/**
 * Fetches lists of series filtered by a character id
 * @param int characterId 
 */
const fetchesSeriesCharactersById = async (characterId, offset = 0) => {
    try {
        const { data: { data } } = await INSTANCE.get(`/characters/${characterId}/series`, {
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



export { fetchesListsCharacters, fetchesCharactersById, fetchesSeriesCharactersById };