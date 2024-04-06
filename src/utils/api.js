export const getPodcastsList = () => fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(response => response.json())
    .catch((error) => {
        console.error('Something went wrong retrieving podcasts list', error)
    });

export const getPodcastDetails = (podcastId) => fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`)}`)
    .then(response => response.json())