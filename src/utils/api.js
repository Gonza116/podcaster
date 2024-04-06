export const getPodcastsList = () => fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(async response => {
        const json = await response.json()
        if (!response.ok) {
            throw json;
        } else {
            return json;
        }
    })
    .catch((error) => {
        console.error('Something went wrong retrieving podcasts list', error)
    });

export const getPodcastDetails = (podcastId) => fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`)}`)
    .then(async response => {
        const json = await response.json()
        if (!response.ok) {
            throw json;
        } else {
            return json;
        }
    })
    .catch((error) => {
        console.error('Something went wrong retrieving podcast details', error)
    });