const submitBtn = document.querySelector('.submit-btn')
const email = document.querySelector('#e-mail')
const phone = document.querySelector('#phone')
const errorDisplay = document.getElementsByClassName('error')
const password = document.querySelector('#user-password')
const confirmPassword = document.querySelector('#user-password-confirm')
const inputFields = document.querySelectorAll('input')
const mainContainer = document.querySelector('.main-container')
const outerOverlay = document.querySelector('.outer-overlay')

let count = 2

function onScreenValidation(current, messageString, booleanTest){
    let message = current
    message.textContent = messageString
    booleanTest != 0 ? ++count : count
}

for(let i = 0; i < inputFields.length; i++) {
    let currentInputField = inputFields[i]
    let currentErrorDisplay = errorDisplay[i]

    currentInputField.addEventListener('keyup', (e) =>{
        let message = currentErrorDisplay;

        if (e.target.value !== "") {
            onScreenValidation(currentErrorDisplay, '', 0);
        } else {
            onScreenValidation(currentErrorDisplay, '*This is a required field', 0);
        }
        
    })
}

/*console.log(errorDisplay)*/

phone.addEventListener('keyup', (e) => {
    let message = errorDisplay[3]
    if (e.target.value === e.target.value.replace(/\D/g, '')) {
        onScreenValidation(message, '', 1)
    } else {
        onScreenValidation(message, '*Please enter a valid number')
    }
})

email.addEventListener('keyup', (e) => {
    let message= errorDisplay[2]
    if (email.value.includes('@') & email.value.includes('.com') ) {
        onScreenValidation(message, '', 1)
    } else {
        onScreenValidation(message, '*Please provide a valid email', 0) 
    }
})

password.addEventListener('keyup', (e) => {
    let message= errorDisplay[4]
    if (password.value.length >= 8 ) {
        onScreenValidation(message, '', 1)
    } else {
        onScreenValidation(message, '*Password requires 8 minimum characters', 0) 
    }
})

confirmPassword.addEventListener('keyup', (e) => {
    let message= errorDisplay[5]
    if (password.value === e.target.value ) {
        onScreenValidation(message, '', 1)
    } else {
        onScreenValidation(message, '*Password do not match', 0) 
    }
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(count > 5) {
        mainContainer.style.display = 'none'
        outerOverlay.classList.remove('disabled')
    } else {
        for(let i = 0; i < errorDisplay.length; i++) {
            errorDisplay[i].textContent = '*This field is required'
        }
    }
})