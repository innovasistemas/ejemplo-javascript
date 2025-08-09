const TOTAL_IMAGES = 10;
let imageSource = [];

loadImages();


let appList = new Vue({
    el: '#app-list',
    data: {
        items: imageSource
    }
});


let appTitle = new Vue({
    el: '#app-title',
    data: {
        mainTitle: "Ciencia y Tecnología"
    }
});


function loadImages()
{
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
        imageSource.push({src: `assets/images/img${i}.jpg`, alt: `images/img${i}.jpg`});
    }
}

