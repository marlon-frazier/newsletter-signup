const emailInput = document.querySelector('#email')
const submitBtn = document.querySelector('#submitBtn')
const errorMsg = document.querySelector('.error')
const successContainer = document.querySelector('.success')
let userEmail = document.querySelector('#user-email')
const container = document.querySelector('.container')

submitBtn.addEventListener('click', () => {
    if (emailInput.value === ''){
        errorMsg.classList.remove('hidden')
        emailInput.style.borderColor = 'red'
        emailInput.style.backgroundColor = 'hsl(4, 100%, 67%)'
        emailInput.style.color = 'red'
    }
    else{
        errorMsg.classList.add('hidden')
        container.classList.add('hidden')
    successContainer.classList.remove('hidden')
    userEmail.textContent = emailInput.value
    }

})
