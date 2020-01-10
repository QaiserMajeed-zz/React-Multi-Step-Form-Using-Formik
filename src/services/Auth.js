import RestUtilities from './RestUtilities';
import AuthStore from './../stores/Auth';




export default class Auth {
    static isSignedIn() {
        return !!AuthStore.getToken();
    }

    signIn(data) {
        return RestUtilities.post(`https://job-portal-api1.herokuapp.com/api/v1/login`, data
        )
            .then((response) => {
                debugger
                if (!response.is_error) {
                    AuthStore.setToken(response.content.access_token);
                }
                return response;
            });
    }



    register(data) {
        return RestUtilities.post(`https://job-portal-api1.herokuapp.com/api/v1/registration/initial`, data
        )
            .then((response) => {
                debugger
                if (!response.is_error) {
                    AuthStore.setToken(response.content.access_token);
                }
                return response;
            });
    }

    confirm(token) {
        return RestUtilities.post('/api/auth/confirm', { token: token })
            .then((response) => {
                return true;
            }).catch((err) => {
                console.log(err);
                return false;
            });
    }

    signOut() {
        AuthStore.removeToken();
    }
}
