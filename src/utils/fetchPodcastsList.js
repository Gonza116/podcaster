export const trimPodcastList = (data) => {
    return data.map(podcast => {
        const imagesArray = podcast['im:image'].map(image => ({ src: image.label, size: Number(image.attributes?.height) }));
        const maxSize = Math.max(...imagesArray.map(image => image.size))
        const biggestImage = imagesArray.find(image => image.size === maxSize)
        return {
          name: podcast['im:name'].label,
          author: podcast['im:artist'].label,
          id: podcast.id.attributes['im:id'],
          image: biggestImage?.src
        }
      });
}