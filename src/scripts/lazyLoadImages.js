var lazyload = {
    loadImages : function () {
        let lazyloadThrottleTimeout;
        let lazyloadImages = document.querySelectorAll("img.lazy");

        if (lazyloadImages.length) {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                let scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        if ('src' in img.dataset) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }
                    }
                });
            }, 20);
        }
    }
};

export default lazyload;