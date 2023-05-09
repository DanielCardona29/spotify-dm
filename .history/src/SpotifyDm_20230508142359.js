import { LitElement } from 'lit-element';
import { Authorization } from './routes/authorization';

export class SpotifyDm extends LitElement {
  static get properties() {
    return {
      client_id: {
        type: { String }
      },
      redirect_url: {
        type: { String }
      },
      token: {
        type: { String }
      }
    }
  }

  constructor() {
    super();
    this.client_id = "b899a388747a4d6ebf858dfddda5f2eb";
    this.client_secret = "c9f8d07a23324cbe8fcf50e5f061df02";
    this.redirect_url = "http://localhost:8000/";
    this.token = "";
  }

  getAuthorize() {
    const authorization = new Authorization(this.client_id, this.redirect_url, this.client_secret);
    authorization.generateAuth();
  }

  async getToken() {

    const params = new URLSearchParams(location.search);

    let code = params.get('code');
    let state = params.get('state');

    const authorization = new Authorization(this.client_id, this.redirect_url, this.client_secret);
    authorization.generateToken(code, state)
    .then(response => {
      console.log(response)
      this._fireEvent('token-generate', response);
    })
    
  }


  _fireEvent(event, payload) {
    this.dispatchEvent(new CustomEvent(event, { detail: payload, bubbles: true }));
  }

}
