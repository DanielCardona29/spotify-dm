const generateRandomString = (stingLimit = 16) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export class Authorization {

    constructor(client_id, redirect_url, client_secret) {
        this.client_id = client_id;
        this.redirect_url = redirect_url;
        this.client_secret = client_secret;

        this.auth_url = 'https://accounts.spotify.com/authorize?';

        this.state = generateRandomString();
        this.response_type = "code";
        this.scope = 'user-read-private user-read-email';
    }

    generateURL() {
        const searchParams = new URLSearchParams();

        searchParams.set('response_type', this.response_type);
        searchParams.set('client_id', this.client_id);
        searchParams.set('scope', this.scope);
        searchParams.set('redirect_uri', this.redirect_url);
        searchParams.set('state', this.state)

        return this.auth_url + searchParams.toString();
    }

    async generateToken(code, state) {
        if (!state) return;

        var authOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(this.client_id + ":" + this.client_secret),
            },
            body: "grant_type=client_credentials&code=" + code + "&redirect_uri=" + this.redirect_url,
        };

        const consult = await fetch('https://accounts.spotify.com/api/token', authOptions)
            .then(res => res.json())
            .then(res => {
                window.sessionStorage.setItem('token', res.access_token);
                window.sessionStorage.setItem('token_expire', res.expires_in);
                return res.access_token;
            });
        return consult;
    }

    generateAuth() {
        window.open(this.generateURL());
    }
}
