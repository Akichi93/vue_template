import Token from './Token';
import AppStorage from './AppStorage';

class User {
    static async responseAfterLogin(res) {
        const { access_token, name, user_id, contact, email } = res.data;

        await AppStorage.store(access_token, name, user_id, contact, email);
    }
    static hasToken() {
        return AppStorage.getToken() !== null;
    }

    static loggedIn() {
        return this.hasToken();
    }

    static name() {
        return this.loggedIn() ? AppStorage.getUser() : null;
    }

    static id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getUser());
            return payload.sub;
        }
        return null;
    }
}

export default User;
