const txtTerm1 = document.querySelector('#txt-a');
const txtTerm2 = document.querySelector('#txt-b');
const txtN = document.querySelector('#txt-n');
const appResult = document.querySelector('#app-result');
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
    methods: {
        binomial: (e) => {
            alert(0)
            let ea = txtN.value;
            let eb = 0;
            let c = 1;
            let eas;
            let ebs;
            let expression = `
                <strong>
                    (${txtTerm1.value} + ${txtTerm2.value})<sup>${txtN.value}</sup>
                </strong> = 
            `;
            expression += `${txtTerm1.value}<sup>${txtN.value}</sup> `;
            for (let i = 1; i <= txtN.value; i++) {
                c = c * ea / (eb + 1);
                ea--;
                eb++;
                eas = ea != 1 ? ea : ""; 
                ebs = eb != 1 ? eb : ""; 
                expression += eb != txtN.value ? 
                    `+ ${c}${txtTerm1.value}<sup>${eas}</sup>${txtTerm2.value}<sup>${ebs}</sup> ` : 
                    `+ ${txtTerm2.value}<sup>${ebs}</sup>`;
            }
            appResult.innerHTML = expression;
        }
    }
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
            alert(1)
            appResult.innerHTML = '';
            appBinomial.isDisabled = true;
        }
    }
});


let appForm = new Vue({
    el: '#app-form',
    components: {
        appBinomial,
        appReset
    },
    data: {
        updateResult: txtTerm1.value.trim(),
        updateResult2: txtTerm2.value.trim(),
        seen: show()
        // updateResult: txtTerm1.value.trim() !== '' ? `(${txtTerm1.value} + ${txtTerm2.value}) =` : '' 
    },
    
});

function show() 
{
    alert(txtTerm1.value.trim() !== '' && txtTerm2.value.trim() !== '' ? true : false)
    return txtTerm1.value.trim() !== '' && txtTerm2.value.trim() !== '' ? true : false 
}


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

