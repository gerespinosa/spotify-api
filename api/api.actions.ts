const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET

// Get the access token
export const getToken = async () => {

    const encodedCredentials = btoa(`${clientId}:${clientSecret}`)

    try {
        const res = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + encodedCredentials,
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                "grant_type": "client_credentials"
            })
        })

        const resData = await res.json()
        const token = resData.access_token
        localStorage.setItem('storedToken', token)
        return token

    } catch (error) {
        console.log('Error getting the access token', error)
    }
}

// Get the artist id by searching by the name
export const getArtistId = async (token: string | null, artist: string) => {

    try {
        const res = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const resData = await res.json()
        const artistId = resData.artists.items[0].id
        return artistId

    } catch (error) {
        console.log('Impossible to recive the info from the artist', error)
    }
}

// Get the artist top tracks
export const getTopTracks = async (token: string | null, artistId: string) => {
    try {
        const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const resData = await res.json()
        const topTracks = resData.tracks
        return topTracks

    } catch (error) {
        console.log('Impossible to get the top tracks', error)
    }
}

// Get discography
export const getDiscography = async (token: string | null, artistId: string) => {
    try {
        console.log(artistId)
        const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=50`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const resData = await res.json()
        const discography = resData.items
        return discography || []

    } catch (error) {
        console.log('Impossible to get the discography', error)
    }
}

// Get the tracklist for each albium (as tooltip)
export const getTrackList = async (token: string | null, albumId: string) => {
    try {
        const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const resData = await res.json()
        const tracklist = resData
        return tracklist

    } catch (error) {
        console.log('Impossible to get the discography', error)
    }
}

// Get the artist id by searching by the name
export const getArtistData = async (token: string | null, artist: string) => {

    try {
        const res = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const resData = await res.json()
        const artistData = resData.artists.items[0]
        return artistData

    } catch (error) {
        console.log('Impossible to recive the info from the artist', error)
    }
}