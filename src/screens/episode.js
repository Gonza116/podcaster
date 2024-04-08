import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PodcastLateralDetails } from "../components/podcastLateralDetails";


export const Episode = () => {
  const { podcastId, episodeId } = useParams()

  const { podcastsDetails } = useSelector(store => store.podcastsDetails)
  const { podcasts } = useSelector(store => store.podcastsList)

  const currentPodcast = podcasts.find(podcast => podcast.id === podcastId)
  const currentPodcastDetails = podcastsDetails[podcastId]
  const currentEpisode = currentPodcastDetails?.episodes?.find(episode => episode.id == episodeId)

  if (!currentPodcastDetails) return null;

  return (
    <div className="podcast-details">

      <PodcastLateralDetails currentPodcast={currentPodcast} currentPodcastDetails={currentPodcastDetails} />

      <div className="podcast-episode shadowed-surface">
        <h2>{currentEpisode.trackName}</h2>
        <div dangerouslySetInnerHTML={{ __html: currentEpisode.description }} />
        <audio controls>
          <source src={currentEpisode.audio.url} type={currentEpisode.audio.type} />
          Your browser does not support the audio element.
        </audio>
      </div>

    </div>
  );
}
