import '../styles/index.scss';
import petService from './petService';
import lazyload from './lazyLoadImages';


function init () {
    petService.fetchPets();
    document.addEventListener("scroll", lazyload.loadImages);
    window.addEventListener("resize", lazyload.loadImages);
    window.addEventListener("load", lazyload.loadImages);
    window.addEventListener("orientationChange", lazyload.loadImages);
}
init();
