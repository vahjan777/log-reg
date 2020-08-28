import './styles/index.css';
import login from "./login/login";
import Registartion from "./register/register";

document.getElementById('registerForm')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let Reg = new Registartion();
        Reg.register()
    })

//login

// document.getElementById('loginButton')
//     .addEventListener('click', login)





//
//
// const loginCon = document.getElementById('containerLogin');
// const registerCon = document.getElementById('containerRegister');
//
// document.getElementById('loginBtn')
//     .addEventListener('click', ()=>{
//         loginCon.hidden = loginCon.hidden !== true;
//     })
//
// document.getElementById('registerBtn')
//     .addEventListener('click', ()=>{
//         registerCon.hidden = registerCon.hidden !== true;
//     })
