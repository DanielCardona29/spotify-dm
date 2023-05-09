
class User {
    constructor() {
        this._token = window.sessionStorage.getItem('token')
    };

    async userProfile() {
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + this._token,
            }
        })
        .then(res => res.json())
        .then(res => console.log(res));
    }
}