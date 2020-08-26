import './styles/index.css';

// register

let i = 0;
const registerEmail = document.getElementById('registerEmail'),
    registerName = document.getElementById('registerName'),
    registerPassword = document.getElementById('registerPassword'),
    registerConfirmPassword = document.getElementById('registerConfirmPassword');
function registerObj() {
    return {
        'name': registerName.value,
        'email': registerEmail.value,
        'pass': registerPassword.value
    };
}
document.getElementById('registerButton')
    .addEventListener('click', () => {
        let item = registerObj()
        if (registerName.value.length === 0
            && registerEmail.value.length === 0
            && registerPassword.value.length === 0
            && registerConfirmPassword.value.length === 0) {
            alert('please try again');
            return;
        }
        if (registerPassword.value !== registerConfirmPassword.value) {
            alert('incorrectly added password');
        } else {
            i++;
            let itemJson = JSON.stringify(item);
            localStorage.setItem(`id${i}`, itemJson);
            alert('registered');
        }
    })

//login

const loginName = document.getElementById('loginName'),
    loginPassword = document.getElementById('loginPassword');

function loginObj() {
    return {
        'name': loginName.value,
        'pass': loginPassword.value
    };
}

document.getElementById('loginButton')
    .addEventListener('click', () => {
        const getLogin = loginObj();
        if (loginName.value.length === 0
            && loginPassword.value.length === 0) {
            alert('Incorrect username or password');
            return
        }

        for (let key in localStorage) {
            const y = JSON.parse(localStorage[key])
            if(getLogin.name === y.name || getLogin.name === y.email) {
                if(getLogin.pass === y.pass){
                    alert(`welcome ${y.name}`)
                } else {
                    alert('Incorrect password');
                }
            }else {
                alert('No such user')
            }
        }

    })

const login = document.getElementById('containerLogin');
const register = document.getElementById('containerRegister')

document.getElementById('loginBtn')
    .addEventListener('click', ()=>{
        login.hidden = login.hidden !== true;
    })

document.getElementById('registerBtn')
    .addEventListener('click', ()=>{
        register.hidden = register.hidden !== true;
    })
