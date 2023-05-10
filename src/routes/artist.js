

export class Artist {

    async getArtist(id) {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/artists/' + id, {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    async getMultiplesArtist(id = []) {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/artists/' + id.join('%'), {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    async getArtistAlbums(id) {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/artists/' + id + '/albums', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    async getArtistTopTracks(id) {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/artists/' + id + '/top-tracks', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }


    async getRelatedArtist(id) {
        const _token = window.sessionStorage.getItem('token')

        return await fetch('https://api.spotify.com/v1/artists/' + id + '/related-artists', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

}