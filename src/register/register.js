import RegisterObj from "./modules/registerObj";

export default function register() {
    const registerEmail = document.getElementById('registerEmail'),
        registerName = document.getElementById('registerName'),
        registerPassword = document.getElementById('registerPassword'),
        registerConfirmPassword = document.getElementById('registerConfirmPassword'),
        registerObj = new RegisterObj(registerName.value, registerEmail.value, registerPassword.value);

    let item = registerObj.getObj();
    if (registerName.value.length === 0
        || registerEmail.value.length === 0
        || registerPassword.value.length === 0
        || registerConfirmPassword.value.length === 0) {
        alert('please try again');
        return;
    }
    if (registerPassword.value !== registerConfirmPassword.value) {
        alert('incorrectly added password');
    } else {
        let getUsers = JSON.parse(localStorage.getItem('users'));
        let newUsers = [];
        if(getUsers){
            getUsers.forEach((el)=>{
                newUsers.push(el)
            })
        }
        newUsers.push(item);
        let userJson = JSON.stringify(newUsers);
        localStorage.setItem(`users`, userJson);
        alert('registered');
    }
    return
}