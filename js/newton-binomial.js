const txtTerm1 = document.querySelector('#txt-a');
const txtTerm2 = document.querySelector('#txt-b');
const txtN = document.querySelector('#txt-n');
const elements = document.querySelectorAll('.disabled');
const TOTAL_IMAGES = 10;
let imageSource = [];

loadImages();

elements.forEach(element => {
    element.addEventListener('focusout', (e) => {
        disableButton();
    });
});


let appTitle = new Vue({
    el: '#app-title',
    data: {
        message: "Binomio de Newton con Vue JS"
    }
});


let appBinomial = new Vue({
    el: '#app-binomial',
    data:{
        isDisabled: true
    },
});


let appList = new Vue({
    el: '#app-list',
    data: {
        items: imageSource
    }
});


let appReset = new Vue({
    el: '#app-reset',
    data: {
        
    },
    methods: {
        reset: (e) => {
            appBinomial.isDisabled = true;
        }
    }
});


function loadImages()
{
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
        imageSource.push({src: `images/img${i}.jpg`, alt: `images/img${i}.jpg`});
    }
}


function disableButton()
{
    appBinomial.isDisabled = true;
    if (txtTerm1.value.trim() !== '') {
        if (txtTerm2.value.trim() !== '') {
            if (txtN.value.trim() !== '') {
                appBinomial.isDisabled = false;
            }
        } 
    } 
}


function btnDevClick()
{
    alert(0)
}

