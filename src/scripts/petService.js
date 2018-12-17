import galleryItems from './galleryItems';


var PetService = {
    fetchPets: fetchPets
};

function fetchPets () {
    let dogs = [];
    return fetch('../public/dogs.json')
        .then(function(response) { return response.json();})
        .then((data) => {
            dogs = data.dogs;
            galleryItems.load(dogs);
            galleryItems.enlarge();
        });
}
export default PetService;