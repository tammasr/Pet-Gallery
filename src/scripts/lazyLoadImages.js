var lazyLoad = {
    // lazy load images based on viewport.
    // Remove the scroll event listeners once all the images are loaded.
    loadImages: function () {
        let lazyloadImages = Array.from(document.querySelectorAll("img.lazy")); // convert nodelist to array
        let active = false;
        if (active === false) {
            active = true;
            setTimeout(function () {
                let scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.classList.remove('lazy');

                        lazyloadImages = lazyloadImages.filter(function (image) {
                            return image !== img;
                        });
                        if (!lazyloadImages.length) {
                            document.removeEventListener("scroll", lazyLoad.loadImages);
                            window.removeEventListener("resize", lazyLoad.loadImages);
                            window.removeEventListener("load", lazyLoad.loadImages);
                            window.removeEventListener("orientationchange", lazyLoad.loadImages);
                        }
                    }
                });
                active = false;
            }, 20);
        }
    }
};

export default lazyLoad;