const txtTerm1 = document.querySelector('#txt-a');
const txtTerm2 = document.querySelector('#txt-b');
const txtN = document.querySelector('#txt-n');
const btnDev = document.querySelector('#app-binomial');
const elements = document.querySelectorAll('.disabled')
let imageSource = [];
let TOTAL_IMAGES = 5;

loadImages();

btnDev.addEventListener('click', (e) => {
    alert(0)
});

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


function loadImages()
{
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
        imageSource.push({src: `images/img${i}.jpg`});
    }
}

function disableButton()
{
    appBinomial.isDisabled = true;
    if (txtTerm1.value.trim() !== '') {
        if (txtTerm2.value.trim() !== '') {
            if (txtN.value.trim() !== '') {
                appBinomial.removeAttribute('disabled')
                appBinomial.isDisabled = false;
            }
        } 
    } 
}