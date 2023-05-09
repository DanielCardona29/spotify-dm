
export class User {
    constructor() {
        this._token = window.sessionStorage.getItem('token')
    };

    async userProfile() {
        return await fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + this._token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    async getUsersTracksAndArtist() {
        return await fetch('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                'Authorization': 'Bearer ' + this._token,
            }
        })
            .then(res => res.json())
            .then(res => res);

    }
}
