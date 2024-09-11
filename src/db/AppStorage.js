class AppStorage {

    static async storeToken(token) {
        localStorage.setItem('token', token);
    }

    static async storeUser(user) {
        localStorage.setItem('user', user);
    }

    static async storeId(id) {
        localStorage.setItem('id', id);
    }

    static async storeContact(contact) {
        localStorage.setItem('contact', contact);
    }

    static async storeEmail(email) {
        localStorage.setItem('email', email);
    }
  

    static async store(token, user, id, contact, email) {
        await this.storeToken(token);
        await this.storeUser(user);
        await this.storeId(id);
        await this.storeContact(contact);
        await this.storeEmail(email);
  
    }

    static async clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('contact');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static getUser() {
        return localStorage.getItem('user');
    }

    static getId() {
        return localStorage.getItem('id');
    }

   

    static getContact() {
        return localStorage.getItem('contact');
    }

    static getEmail() {
        return localStorage.getItem('email');
    }

   
}

export default AppStorage;
