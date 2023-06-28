const formName = document.getElementById('name');
const frontCardName = document.getElementById('frontcard-name');
const formNumbers = document.getElementById('card');
const frontCardNumbers = document.getElementById('frontcard-numbers');
formName.addEventListener('input', actualizarFrontCardName);
formNumbers.addEventListener('input', actualizarFrontCardNumbers);
const backCardCVC = document.getElementById('backCardCVC');
const formCVC = document.getElementById('cvc');
formCVC.addEventListener('input', actualizarBackCardCVC);
const formMonth = document.getElementById('expdatemm');
const frontCardMonth = document.getElementById('frontCardMonth');
formMonth.addEventListener('input', actualizarFrontCardMonth);
const formYear = document.getElementById('expdateyy');
const frontCardYear = document.getElementById('frontCardYear');
formYear.addEventListener('input', actualizarFrontCardYear);
const mobileFrontCardNumbers = document.getElementById('frontcard-mobile-numbers');
formNumbers.addEventListener('input', actualizarMobileFrontCardNumbers);
const mobileFrontCardName = document.getElementById('frontcard-mobile-name');
formName.addEventListener('input', actualizarMobileFrontCardName);
const mobileBackCardCVC = document.getElementById('mobilecvc');
formCVC.addEventListener('input',actualizarMobileCVC);
const complete = document.getElementById('complete');
const formButton = document.getElementById('form-button');
const formContainer = document.getElementById('form-container');
formButton.addEventListener('click', ()=>{
    complete.style.display = "flex";
    formContainer.style.display = "none"

})



// FUNCIONES ACTUALIZACIONES DE TARJETA

function actualizarFrontCardName(){
    frontCardName.textContent = formName.value
}

function actualizarFrontCardNumbers(){
    frontCardNumbers.textContent = grupoTarjeta(formNumbers.value)

    function grupoTarjeta(number) {
   
        const groups = [];
        for (let i = 0; i < number.length; i += 4) {
            groups.push(number.slice(i, i + 4));
        }
        
        const numerostarjeta = groups.join(' ');
    
        return numerostarjeta;
    }
}

function actualizarBackCardCVC(){
    backCardCVC.textContent = formCVC.value;
}

function actualizarFrontCardMonth(){
    frontCardMonth.textContent = formMonth.value+'/';
}

function actualizarFrontCardYear(){
    frontCardYear.textContent = formYear.value;
}

function actualizarMobileFrontCardNumbers(){
    mobileFrontCardNumbers.textContent = grupoTarjeta(formNumbers.value)

    function grupoTarjeta(number) {
   
        const groups = [];
        for (let i = 0; i < number.length; i += 4) {
            groups.push(number.slice(i, i + 4));
        }
        
        const numerostarjeta = groups.join(' ');
    
        return numerostarjeta;
    }
}

function actualizarMobileFrontCardName(){
    mobileFrontCardName.textContent = formName.value
}
function actualizarMobileCVC(){
    mobileBackCardCVC.textContent = formCVC.value;
}

//SEPARA DE A 4 LOS NUMEROS DE LA TARJETA

// function grupotarjeta(number) {
   
//     const groups = [];
//     for (let i = 0; i < number.length; i += 4) {
//         groups.push(number.slice(i, i + 4));
//     }
    
//     const numerostarjeta = groups.join(' ');

//     return numerostarjeta;
// }

