const loginSection = document.querySelector('.login-section');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

loginLink.addEventListener('click', () => {
    console.log('hhe')
    loginSection.classList.add('active');
})

registerLink.addEventListener('click', () => {
    console.log('hhe')
    loginSection.classList.remove('active');
})