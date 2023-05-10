export class User {
    async userProfile() {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    async getUsersTracksAndArtist() {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    async getFollowedArtist() {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/me/following?type=artist', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }
}
