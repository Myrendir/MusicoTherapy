var SpotifyWebApi = require('../');

/**
 * This example demonstrates adding tracks to a specified position in a playlist.
 *
 * Since authorization is required, this example retrieves an access token using the Authorization Code Grant flow,
 * documented here: https://developer.spotify.com/spotify-web-api/authorization-guide/#authorization_code_flow
 *
 * Codes are given for a set of scopes. For this example, the scopes are playlist-modify-public.
 * Scopes are documented here:
 * https://developer.spotify.com/spotify-web-api/using-scopes/
 */

/* This code is hardcoded. For a working implementation, the code needs to be retrieved from the user. See documentation about
 * the Authorization Code flow for more information.
 */
var authorizationCode =
    'AQAgjS78s64u1axMCBCRA0cViW_ZDDU0pbgENJ_-WpZr3cEO7V5O-JELcEPU6pGLPp08SfO3dnHmu6XJikKqrU8LX9W6J11NyoaetrXtZFW-Y58UGeV69tuyybcNUS2u6eyup1EgzbTEx4LqrP_eCHsc9xHJ0JUzEhi7xcqzQG70roE4WKM_YrlDZO-e7GDRMqunS9RMoSwF_ov-gOMpvy9OMb7O58nZoc3LSEdEwoZPCLU4N4TTJ-IF6YsQRhQkEOJK';


/**
 * Set the credentials given on Spotify's My Applications page.
 * https://developer.spotify.com/my-applications
 */
var spotifyApi = new SpotifyWebApi({
    clientId: '87f5514b235c4f86979dd91599c7c357',
    clientSecret: '0e42b39e3cc6487d86e488f1961850a7',
    redirectUri: 'http://localhost:8000/'
});

// First retrieve an access token
spotifyApi
    .authorizationCodeGrant(authorizationCode)
    .then(function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.addTracksToPlaylist(
            'thelinmichael',
            '5ieJqeLJjjI8iJWaxeBLuK',
            [
                'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
                'spotify:track:1301WleyT98MSxVHPZCA6M'
            ],
            {
                position: 10
            }
        );
    })
    .then(function(data) {
        console.log('Added tracks to the playlist!');
    })
    .catch(function(err) {
        console.log('Something went wrong!', err.message);
    });
