let realForm = document.querySelector('form');
let emailVal = document.querySelector('#email');
let passwordVal = document.querySelector('#password');

realForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailVal.value;
    const password = passwordVal.value;
    console.log({ email, password });
})