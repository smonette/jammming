let accessToken = '';
const clientID = '07fc00f4e24246fc9040b5f1a0b5899c';
// const redirect = 'http://smonette-jammming.surge.sh';
const redirect = 'http://localhost:3000';

const Spotify = {
  getAccessToken() {
    // TODO: how is this set?? 
    console.log("access token: ", accessToken)
    if (accessToken){
      return accessToken;
    } else {
      const sessionToken = window.location.href.match(/access_token=([^&]*)/);
      const sessionExpiration = window.location.href.match(/expires_in=([^&]*)/);

        console.log("session token: ", sessionToken)

        if (sessionToken && sessionExpiration){
          // Set the access token value
          accessToken = sessionToken[1];
          // Set a variable for expiration time
          let expirationTime = sessionExpiration[1];
          // TODO: Set the access token to expire at the value for expiration time 
          // ??????
          // set as cookie
          // local storages doesnt have expir
          // document.cookie = 'access-token something something'

          // Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired
          // window.setTimeout(() => accessToken = '', expirationTime * 1000);
          window.history.pushState('Access Token', null, '/');

        } else {
          window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect}`
        }
    }
  },
// I dont know if/why i need the comma above, but I'm getting a syntax error without?
  search(term) {
    // returns a promise that will eventually resolve to the list of tracks from the search
    const spotifySearchUrl = 'https://api.spotify.com/v1/search?type=track&q='
    const spotifyAccessToken = Spotify.getAccessToken()

    return fetch(`${spotifySearchUrl}${term}`, {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artists: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });

  },
  savePlaylist(playlistName, playlistTracks) {
    // call spotify for save playlist, get the users id from 
    let url= 'https://api.spotify.com/v1/me'


    // GET current user's ID
    // POST a new playlist with the input name to the current user's Spotify account. Receive the playlist ID back from the request.
    // POST the track URIs to the newly-created playlist, referencing the current user's account (ID) and the new playlist (ID)
  
    let currentUserToken = this.getAccessToken();
    // An access token variable, set to the current user's access token
    // A headers variable, set to an object with an Authorization parameter containing the user's access token in the implicit grant flow request format
    // An empty variable for the user's ID
  }



}

export default Spotify;