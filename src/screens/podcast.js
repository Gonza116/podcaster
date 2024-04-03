import { useParams } from "react-router-dom";


export const Podcast = () => {
  const { podcastId } = useParams()

  return (
    <div>
      <p>Podcast</p>
      <p>Podcast id: {podcastId}</p>
    </div>
  );
}
