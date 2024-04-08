export const trimPodcastList = (data) => {
    return data.map(podcast => {
        const imagesArray = podcast['im:image'].map(image => ({ src: image.label, size: Number(image.attributes?.height) }));
        const maxSize = Math.max(...imagesArray.map(image => image.size))
        const biggestImage = imagesArray.find(image => image.size === maxSize)
        return {
            name: podcast['im:name'].label,
            author: podcast['im:artist'].label,
            id: podcast.id.attributes['im:id'],
            image: biggestImage?.src,
            description: podcast.summary.label
        }
    });
}

export const getFormatedDate = (date) => {
    return Intl.DateTimeFormat(undefined, { month: '2-digit', day: '2-digit', year: 'numeric' }).format(date)
}

export const getFormatedDuration = (seconds) => {

    if (seconds?.includes(':')) {
        const time = seconds.split(':');
        const minutes = Number(time[1]);
        const hours = Number(time[0])
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`

    } else {
        const minutes = seconds / 60;
        const hours = Math.floor(minutes / 60);
        const leftMinutes = Math.round(minutes - (hours * 60))

        return `${hours}:${leftMinutes < 10 ? '0' + leftMinutes : leftMinutes}`
    }
}
