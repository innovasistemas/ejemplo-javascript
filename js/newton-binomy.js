// let txtTerm1 = document.getElementById('txt-a');
// let txtTerm2 = document.getElementById('txt-b');
// let txtN = document.getElementById('txt-n');
let txtTerm1 = document.getElementById('txt-a');
let txtTerm2 = document.getElementById('txt-b');
let txtN = document.getElementById('txt-n');
const elements = document.querySelectorAll('.disabled')

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