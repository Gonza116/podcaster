import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PodcastLateralDetails } from "../components/podcastLateralDetails";


export const Episode = () => {
  const { podcastId, episodeId } = useParams()

  const { podcastsDetails } = useSelector(store => store.podcastsDetails)
  const { podcasts } = useSelector(store => store.podcastsList)

  const currentPodcast = podcasts.find(podcast => podcast.id === podcastId)
  const currentPodcastDetails = podcastsDetails[podcastId]
  const currentEpisodde = currentPodcastDetails?.episodes?.find(episode => episode.trackId === Number(episodeId))

  if (currentPodcastDetails) {
    return (
      <div className="podcast-details">

        <PodcastLateralDetails currentPodcast={currentPodcast} currentPodcastDetails={currentPodcastDetails} />

        <div className="podcast-episode shadowed-surface">
          <h2>{currentEpisodde.trackName}</h2>
          <div dangerouslySetInnerHTML={{ __html: currentEpisodde.description }} />
          <audio controls>
            <source src={currentEpisodde.episodeUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

      </div>
    );
  }
}

