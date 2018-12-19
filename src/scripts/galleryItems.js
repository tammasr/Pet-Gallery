var galleryItems = {

    // Construct the DOM thumbnail images
    load: function (dogs) {
            let li, img;
            let ul = document.querySelector('.gallery');
            let fragment = document.createDocumentFragment();

            dogs.forEach(function (item) {
                li = document.createElement('li');
                img = document.createElement('img');

                li.classList.add('image-box');
                img.setAttribute('data-src', item.image);
                img.classList.add('lazy');
                img.alt = "Image";

                li.appendChild(img);
                ul.appendChild(li);
            });
            ul.appendChild(fragment);
        },

    // Add modal popup
    enlarge: function () {
        let ul = document.querySelector('.gallery');

        // event bubbling - will capture the target element
        ul.addEventListener('click', function (e) {
            let selectedImg = e.target;
            if(e.target.src) {

                let modal = document.getElementById('myModal');
                modal.style.display = "block";
                let modalImg = document.getElementById("modalImg");
                modalImg.src = selectedImg.src;

                let span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                };
            }
        });
    }
};

export default galleryItems;

