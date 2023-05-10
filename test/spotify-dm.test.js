import {
  html,
  fixture,
  assert,
  fixtureCleanup,
  expect
} from '@open-wc/testing';
import '../spotify-dm.js';

suite('SpotifyDm', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('Spotify dm', () => {

    setup(async () => {
      el = await fixture(html`<spotify-dm></spotify-dm>`);
      await el.updateComplete;
    });

    test('component accessibility', async () => {
      await assert.isAccessible(el);
    });


    test('Fire event', () => {
      expect(el._fireEvent()).equals(undefined);
    });


    test('default uri', () => {
      const url = "http://localhost:8000/";
      expect(el.redirect_url).equal(url)
    });

    test('get authorization', async () => {
      expect(await el.getAuthorize()).equal(true);
    });

    test('get token', async () => {
      expect(await el.getToken()).equal(undefined);
    })

    test('get user profile connection', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getUserProfile())).equal(JSON.stringify(response));
    });

    test('get top user connection', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getTopUser())).equal(JSON.stringify(response));
    });

    test('get album', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getAlbum())).equal(JSON.stringify(response));
    });


    test('get multiples albums', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getMultiplesAlbum())).equal(JSON.stringify(response));
    });


    test('get album tracks', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getAlbumTracks())).equal(JSON.stringify(response));
    });


    test('get saved albums', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getSavedAlbums())).equal(JSON.stringify(response));
    });


    test('get artist', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getArtist())).equal(JSON.stringify(response));
    });


    test('get multiples artist', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getMultiplesArtist())).equal(JSON.stringify(response));
    });


    test('get artist top tracks', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getArtistTopTracks())).equal(JSON.stringify(response));
    });


    test('get related artist', async () => {
      const response = {
        "error": {
          "status": 401,
          "message": "Invalid access token"
        }
      }
      expect(JSON.stringify(await el.getRelatedArtist())).equal(JSON.stringify(response));
    });


  });
});
