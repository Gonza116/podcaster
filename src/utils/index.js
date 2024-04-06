export { getPodcastDetails, getPodcastsList } from "./api";

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
  const dateParts = date.toLocaleDateString().split('/')
  return `${dateParts[0] < 10 ? '0' + dateParts[0] : dateParts[0]}/${dateParts[1] < 10 ? '0' + dateParts[1] : dateParts[1]}/${dateParts[2]}`
}

export const getFormatedDuration = (millis) => {
  const minutes = millis / 1000 / 60;
  const hours = Math.floor(minutes / 60);
  const leftMinutes = Math.round(minutes - (hours * 60))

  return `${hours}:${leftMinutes < 10 ? '0' + leftMinutes : leftMinutes}`
}