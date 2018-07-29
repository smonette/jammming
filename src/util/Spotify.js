let accessToken = '';
const clientID = '07fc00f4e24246fc9040b5f1a0b5899c';

//  for production
const redirect = 'http://smonette-jammming.surge.sh';

// For local dev
// const redirect = 'http://localhost:3000';

const Spotify = {
  getAccessToken() {
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

          // Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired
          window.setTimeout(() => accessToken = '', expirationTime * 1000);
          window.history.pushState('Access Token', null, '/');

        } else {
          window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect}`
        }
    }
  },
  search(term) {
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
        console.log(jsonResponse.tracks)
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artists: track.artists[0].name,
          album: track.album.name,
          albumArt: track.album.images[2].url,
          uri: track.uri
        }));
      }
    });

  },
  savePlaylist(playlistName, playlistTracks) {
    let currentUserToken = Spotify.getAccessToken();
    let headers = "headers: {Authorization: `Bearer ${currentUserToken}`}"
    let userID = ''
    // call spotify for save playlist, get the users id from 
    let apiUrl='https://api.spotify.com/v1'
    let playlistID = ''

    const getUserId = () => {
      return fetch(`${apiUrl}/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${currentUserToken}`
          }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
            userID = jsonResponse.id
            return userID
        }) 
        .catch(error => console.error(`Error getting UserID =\n`, error));  
    }

    // POST a new playlist with the input name to the current user's Spotify account. 
    // Receive the playlist ID back from the request.
    const savePlaylistName = (userID) => {
        return fetch(`${apiUrl}/users/${userID}/playlists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: `Bearer ${currentUserToken}`

            },
            body: JSON.stringify({name: playlistName}), 
        }).then(response => {
        return response.json();
        })
        .then(jsonResponse => {
            playlistID = jsonResponse.id
            return playlistID;
        })
        .catch(error => console.error(`Error Saving Playlist Name =\n`, error));
    };


    // POST the track URIs to the newly-created playlist, referencing the current user's account (ID) and the new playlist (ID)
    const savePlaylistTracks = (userID, playlistID) => {
        return fetch(`${apiUrl}/users/${userID}/playlists/${playlistID}/tracks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: `Bearer ${currentUserToken}`
            },
            body: JSON.stringify({"uris": playlistTracks}), 
        }).then(response => {
          return response.json();
        })
        .then(jsonResponse => {
            return jsonResponse.response
        })
        .catch(error => console.error(`Error Saving Playlist Tracks =\n`, error));
    };

    //  Where the magic actually happens!
    getUserId().then(userID => savePlaylistName(userID).then(playlistID => savePlaylistTracks(userID, playlistID)))


  }
  // close save


}
// close spotify

export default Spotify;