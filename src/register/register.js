import RegisterObj from "./modules/registerObj";

const registerEmail = document.getElementById('registerEmail'),
    registerName = document.getElementById('registerName'),
    registerPassword = document.getElementById('registerPassword'),
    registerConfirmPassword = document.getElementById('registerConfirmPassword');


export default class Registartion {
    register() {
        const registerObj = new RegisterObj(registerName.value, registerEmail.value, registerPassword.value);
        let item = registerObj.getObj();
        if (!this.checkObjValidation()) {
            return false;
        }

        if (registerPassword.value !== registerConfirmPassword.value) {
            alert('incorrectly added password');
        } else {
            let getUsers = JSON.parse(localStorage.getItem('users'));
            let newUsers = getUsers ? getUsers : [];
            newUsers.push(item);
            let userJson = JSON.stringify(newUsers);
            localStorage.setItem(`users`, userJson);
            alert('registered');
        }
        return;
    }

    checkObjValidation() {
        if (registerName.value.length === 0
            || registerEmail.value.length === 0
            || registerPassword.value.length === 0
            || registerConfirmPassword.value.length === 0) {
            alert('please try again');
            return false;
        }
        return true;
    }
}