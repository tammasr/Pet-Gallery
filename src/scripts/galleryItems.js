var galleryItems = {
    load: function (dogs) {
            let li, img;
            let ul = document.querySelector('.gallery');
            let fragment = document.createDocumentFragment();

            dogs.forEach(function (item) {
                li = document.createElement('li');
                img = document.createElement('img');

                li.classList.add('image-box');
                img.setAttribute('src', item.image);
                img.alt = "Image";

                li.appendChild(img);
                ul.appendChild(li);
            });
            ul.appendChild(fragment);
        }
};

export default galleryItems;

