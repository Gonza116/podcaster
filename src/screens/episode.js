import { useParams } from "react-router-dom";


export const Episode = () => {
  const { podcastId, episodeId } = useParams()

  return (
    <div>
      <p>Episode</p>
      <p>Podcast id: {podcastId}</p>
      <p>Episode id: {episodeId}</p>
    </div>
  );
}

