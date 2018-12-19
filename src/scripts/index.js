import '../styles/index.scss';
import petService from './petService';
import lazyLoad from './lazyLoadImages';


function init () {

    //fetch pets
    petService.fetchPets();
    document.addEventListener("scroll", lazyLoad.loadImages);
    window.addEventListener("resize", lazyLoad.loadImages);
    window.addEventListener("load", lazyLoad.loadImages);
    window.addEventListener("orientationChange", lazyLoad.loadImages);
}
init();
