const txtTerm1 = document.querySelector('#txt-a');
const txtTerm2 = document.querySelector('#txt-b');
const txtN = document.querySelector('#txt-n');
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

let appList = new Vue({
    el: '#app-list',
    data: {
        items: [
            {text: '1'},
            {text: '2'},
        ]
    }

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