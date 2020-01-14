export default class Auth {
    static STORAGE_KEY = "token";
    static USER = "USER";

    static getToken() {

        return window.localStorage.getItem(Auth.STORAGE_KEY);
    }

    static setToken(token) {
        window.localStorage.setItem(Auth.STORAGE_KEY, token);
    }

    
    static getUser() {

        return window.localStorage.getItem(Auth.USER);
    }

    static setUser(user) {
        window.localStorage.setItem(Auth.USER, user);
    }
    
    

    static removeToken() {
        window.localStorage.removeItem(Auth.STORAGE_KEY);
    }
}
