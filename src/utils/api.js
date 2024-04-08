import Parser from 'rss-parser'

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

export const getPodcastDetails = (podcastId) => fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=0`)}`)
    .then(async response => {
        const json = await response.json()
        if (!response.ok) {
            throw json;
        } else {
            return json;
        }
    })
    .catch((error) => {
        console.error('Something went wrong retrieving podcast details', error);
        return;
    });

export const getPodcastEpisodes = async (feedUrl) => {
    try {

        const parser = new Parser();

        const feed = await parser.parseURL(`https://corsproxy.io/?${encodeURIComponent(feedUrl)}`)

        const episodes = feed.items.map((episode, index) => ({
            title: episode.title,
            audio: episode.enclosure,
            description: episode['content:encoded'],
            id: episode.guid.replaceAll('/', ''),
            date: episode.isoDate,
            duration: episode.itunes?.duration
        }));
        return episodes;
    } catch (error) {
        console.error('Something went wrong retrieving episodes list', error)
        return []
    }
}