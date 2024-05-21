let realForm = document.querySelector('form');
let emailVal = document.querySelector('#email');
let passwordVal = document.querySelector('#password');

async function postLogin(email, password) {
    const response = await fetch("https://mira-backend.azurewebsites.net/api/auth/login", {
      method: "POST",
      body: { email, password },
    });

    return response;
}

realForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailVal.value;
    const password = passwordVal.value;
    
    try {
        const res = await postLogin(email, password);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
})
