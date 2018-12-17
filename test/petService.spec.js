const promisedData = require('../public/dogs.json');
import PetService from '../src/scripts/petService';

describe('.fetchPets', function() {

it('call pet service to fetch pets', function () {
    spyOn(PetService, 'fetchPets').and.returnValue(Promise.resolve(promisedData));
    PetService.fetchPets().then((res) => {
        expect(res).toEqual(promisedData);
    });
});
});