let accessToken = '';
const clientID = '07fc00f4e24246fc9040b5f1a0b5899c';
const redirect = 'smonette-jammming.surge.sh';



const Spotify = {
  getAccessToken() {
    // TODO: how is this set?? 
    if (accessToken){
      return accessToken;
    } else {
      const sessionToken = window.location.href.match(/access_token=([^&]*)/);
      const sessionExpiration = window.location.href.match(/expires_in=([^&]*)/);

      if (sessionToken && sessionExpiration){
        // Set the access token value
        let accessToken = sessionToken;
        // Set a variable for expiration time
        let expirationTime = sessionExpiration;
        // TODO: Set the access token to expire at the value for expiration time 
        // ??????


        // Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired
        // TODO: found this on stackoverflow, and I'm not sure what it's doing
        // let cleanURL = location.protocol + "//" + location.host + location.pathname;
        // window.history.replaceState({}, document.title, cleanURL);

      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect}`
      }
    }
  },
// I dont know if/why i need the comma above, but I'm getting a syntax error without?
  search(term) {
    // returns a promise that will eventually resolve to the list of tracks from the search
    const spotifySearchUrl = 'https://api.spotify.com/v1/search?type=track&q='


    return fetch(`${spotifySearchUrl}${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artist,
          album: track.album,
          uri: track.uri
        }));
      }
    });

  },
  savePlaylist(playlistName, playlistTracks) {

  }



}

export default Spotify;