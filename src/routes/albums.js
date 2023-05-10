export class Album {

    //Obtiene un album
    async getAlbum(id = ""){
        const _token = window.sessionStorage.getItem('token')
        return await fetch('https://api.spotify.com/v1/albums/' + id, {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    //Obtiene multiples albunes
    async getMultiplesAlbum(id = []){
        const _token = window.sessionStorage.getItem('token')
        return await fetch('https://api.spotify.com/v1/albums/' + id.join('%'), {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }

    //Obtines las canciones de un album
    async getAlbumTracks(id = ""){
        const _token = window.sessionStorage.getItem('token')
        return await fetch('https://api.spotify.com/v1/albums/' + id + '/tracks', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }
    
    //Obtiene los albunes guardados
    async getSavedAlbums(){
        const _token = window.sessionStorage.getItem('token')
        return await fetch('https://api.spotify.com/v1/me/albums', {
            headers: {
                'Authorization': 'Bearer ' + _token,
            }
        })
            .then(res => res.json())
            .then(res => res);
    }
}