
class User {
    constructor(){
        const _token = window.sessionStorage.getItem('token')
    };

    userProfile(){
        fetch('https://api.spotify.com/v1/me',{
            headers:{
                'Authorization': 'Bearer ' + this._token
            }
        })
    }
}