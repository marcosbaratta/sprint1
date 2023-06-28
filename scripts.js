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
const form = document.getElementById('form');
const boton = document.getElementById('boton');

boton.addEventListener('click', ()=>{
    complete.style.display = "none";
    form.reset();
    formContainer.style.display = "flex";
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



// VALIDACIONES

formNumbers.addEventListener('input', function() {
    if (this.value.length >= 16) {
      this.value = this.value.slice(0, 15);
    }
  });


const nameError = document.getElementById('name-error');
const cardError = document.getElementById('card-error');
const expDateError = document.getElementById('expdate-error');
const cvcError = document.getElementById('cvc-error');


formButton.addEventListener('click',()=>{
    let a = 0;
    if(formName.value.length<2){
        nameError.style.display = "inline";
        a+=1;
    }
    if(formNumbers.value.length!=15){
        cardError.style.display = "inline";
        a+=1;
    }
    if(formMonth.value > 12 || formYear.value <23 || isNaN(formMonth.value) || isNaN(formYear.value)) {
        expDateError.style.display = "inline";
        a+=1;
    }
    
    if(formCVC.value.length !==3 || isNaN(formCVC.value)){
        cvcError.style.display = "inline";
        a+=1;
    }
    if(a==0){
        formContainer.style.display = "none";
        complete.style.display = "flex";
    }
}   
);









// CUANDO EL FORMULARIO ESTA TODO OK

// formButton.addEventListener('click', ()=>{
//     complete.style.display = "flex";
//     formContainer.style.display = "none"

// })


