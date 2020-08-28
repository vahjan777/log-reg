import './styles/index.css';
import login from "./login/login";
import register from "./register/register";
// register

document.getElementById('registerButton')
    .addEventListener('click', register)

//login

document.getElementById('loginButton')
    .addEventListener('click', login)







const loginCon = document.getElementById('containerLogin');
const registerCon = document.getElementById('containerRegister');

document.getElementById('loginBtn')
    .addEventListener('click', ()=>{
        loginCon.hidden = loginCon.hidden !== true;
    })

document.getElementById('registerBtn')
    .addEventListener('click', ()=>{
        registerCon.hidden = registerCon.hidden !== true;
    })
