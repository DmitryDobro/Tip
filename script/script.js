
let form = document.querySelector('.form');
let billInput = document.querySelector('.bill-input');
let numberPersonInput = document.querySelector('.numberPerson-input');
let procentTip = document.querySelector('.procentTip-size')
let btnArray = document.querySelectorAll('.procentTip-btn')
let resultTip = document.querySelector('.result-tipAmmount').querySelector('.number')
let resultTotal = document.querySelector('.result-total').querySelector('.number')

let z = 5
let btnCustom = document.querySelector('.procentTip-btn.custom').querySelector('input')
console.log(btnCustom);

for(let button of btnArray){
    button.addEventListener('click',(event) =>{
        let btnActive = document.querySelector('.procentTip-btn.active')
        if(event.target.closest('.procentTip-btn')){
            button.classList.add('active'); 
        }
        if(event.target.closest('.procentTip-btn.active')){
            btnActive.classList.remove('active');
        }
        if(event.target.closest('procentTip-btn.custom.active')){
            console.log(123);
        }
    })
}
function data(event){
    z =  parseInt(event.target.value) 
    console.log( parseInt(event.target.value) );
    }
procentTip.addEventListener('click', data)
procentTip.addEventListener('input', data)

form.addEventListener('submit', (event) => {
    event.preventDefault();

   

    function tipMain(){    
        bill = Number(billInput.value) 
        person = Number(numberPersonInput.value)
        console.log(bill + person + z);
        let numberTip =`$` + ((bill / 100 * z )/ person).toFixed(2);
        resultTip.innerHTML = numberTip

        let numberTotal = `$` + (bill / person).toFixed(2);
        resultTotal.innerHTML = numberTotal
        billInput.value = ''
        numberPersonInput.value = ''
        btnCustom.value = ''
        
    }


    function formValidates(){
        let inputs = document.querySelectorAll('._req')
        let error = 0
        for(let input of inputs){
            if(input.value == ''){
                input.classList.add('error');
                error++
            }
            else if (error == 0){
                input.classList.remove('error');
            }
        } 
        if(error == 0){
            tipMain()
        
        }       
    }
    formValidates()
   

    
})


