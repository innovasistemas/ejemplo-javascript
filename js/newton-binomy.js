const txtA = document.getElementById('txt-a');
const txtB = document.getElementById('txt-b');
const txtN = document.getElementById('txt-n');
const btnDev = document.getElementById('newton-binomy');
const divResult = document.getElementById('div-result');

btnDev.addEventListener('click', (e) => {
    // let msg = "Término 1: " + txtA.value;
    let msg = `
        Término 1: ${txtA.value}
        <br>
        Término 2: ${txtB.value}
    `;
    divResult.innerHTML = msg;
});