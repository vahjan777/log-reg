export default class RegisterObj {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    getObj() {
        return  {
            'name': this.name,
            'email': this.email,
            'pass': this.pass,
        }
    }
}