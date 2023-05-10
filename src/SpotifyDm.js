import { LitElement } from 'lit-element';

import { Authorization } from './routes/authorization';
import { User } from './routes/users';
import { Album } from './routes/albums';
import { Artist } from './routes/artist';
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

    this.user = new User();
    this.album = new Album();
    this.artist = new Artist();
  }

  /**
  * @description Genera an event
  * @param event String -  the name of related event
  * @param payload Object -  Information than the event gonna translate
  */
  _fireEvent(event, payload) {
    this.dispatchEvent(new CustomEvent(event, { detail: payload, bubbles: true }));
  }

  /**
   * @description genera the authorization link 
   * @returns true
   *
   */
  getAuthorize() {
    const authorization = new Authorization(this.client_id, this.redirect_url, this.client_secret);
    authorization.generateAuth();
    return true
  }

  async getToken() {

    const params = new URLSearchParams(location.search);

    let code = params.get('code');
    let state = params.get('state');

    const authorization = new Authorization(this.client_id, this.redirect_url, this.client_secret);

    return await authorization.generateToken(code, state)
      .then(response => {
        this._fireEvent('token-generate', response);
        return response;
      })

  }

  async getUserProfile() {
    const profile = await this.user.userProfile();
    this._fireEvent('get-profile', profile);
    return profile;
  }

  async getTopUser() {
    const top = await this.user.getUsersTracksAndArtist();
    this._fireEvent('top-artist', top);
    return top;
  }

  /**
  get an album
  @param id album id
  */
  async getAlbum(id) {
    const album = await this.album.getAlbum(id);
    this._fireEvent('get-album', album);
    return album
  }

  /**
  get multiples albums
  @param id array of albums ids ej: ["11","22"]
  */
  async getMultiplesAlbum(id) {
    const albums = await this.album.getMultiplesAlbum(id);
    this._fireEvent('get-multiple-album', albums);
    return albums;
  }


  /**
  get all tracks of an album
  @param id album id
  */
  async getAlbumTracks(id) {
    const albums = await this.album.getAlbumTracks(id);
    this._fireEvent('get-multiple-album', albums);
    return albums;
  }

  /**
  get all users saved albums
  */
  async getSavedAlbums() {
    const albums = await this.album.getSavedAlbums();
    this._fireEvent('get-multiple-album', albums);
    return albums;
  }

  /**
  * @description Get all an artist 
  * @param id artist id
  * @returns  artist objet
  */
  async getArtist(id) {
    const artist = await this.artist.getArtist(id);
    this._fireEvent('get-artist', artist);
    return artist;
  }
  
  /**
  * @description get multiples artist
  * @param id array of artist ids
  * @returns  array of artist oject
  */
  async getMultiplesArtist(id) {
    const artist = await this.artist.getMultiplesArtist(id);
    this._fireEvent('get-multiple-artist', artist);
    return artist;
  }


  /**
  * @description get the artist top tracks
  * @param id artist id
  * @returns  artist oject
  */
  async getArtistTopTracks(id) {
    const artist = await this.artist.getArtistTopTracks(id);
    this._fireEvent('get-artist-top-track', artist);
    return artist;
  }

  /**
  * @description get related artist
  * @param id artist id
  * @returns  artist objet
  */

  async getRelatedArtist(id) {
    const artist = await this.artist.getRelatedArtist(id);
    this._fireEvent('get-related-artist', artist);
    return artist;
  }
  
}
