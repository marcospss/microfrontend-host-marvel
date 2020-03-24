// import mockAxios from 'axios';
import { handleDetailsLoad } from './characterDetailsSaga';
// import { characters } from '../../services';

describe("Fetch Details character saga",()=>{
    
    // beforeAll(()=>{
    //     characters.fetchesCharactersById.setCharactersById([{ id: 1011334 }]);
    // });

    it("should get the details character from the correct endpoint in response to the appropriate action", async() => {
        const gen = handleDetailsLoad(1011334);
        const { result } = await gen.next();
        expect(result).toEqual(undefined);
    });

    
});
