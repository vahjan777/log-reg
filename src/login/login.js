import LoginObj from "./modules/loginObj";

export default function login() {
    const loginName = document.getElementById('loginName'),
        loginPassword = document.getElementById('loginPassword'),
        getLogin = new LoginObj(loginName.value,loginPassword.value);

    if (loginName.value.length === 0
        || loginPassword.value.length === 0) {
        alert('Incorrect username or password');
        return
    }
    let trueUser = false;
    let getUsers = JSON.parse(localStorage.getItem('users'));
    for (let el of getUsers){
        if(getLogin.name === el.name || getLogin.name === el.email) {
            if(getLogin.pass === el.pass){
                alert(`welcome ${el.name}`);
                trueUser = true;
                break;
            } else {
                alert('Incorrect password');
                trueUser = true;
                break;
            }
        }
    }
    trueUser || alert('No such user');
    return
}