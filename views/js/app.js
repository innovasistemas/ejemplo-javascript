let appTitle = new Vue({
    el: '#app-title',
    data: {
        message: "Vistas con Vue JS"
    }
});

const TOTAL_IMAGES = 10;
let imageSource = [];
loadImages();
let appList = new Vue({
    el: '#app-list',
    data: {
        items: imageSource
    }
});

function loadImages()
{
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
        imageSource.push({src: `images/img${i}.jpg`, alt: `images/img${i}.jpg`});
    }
}