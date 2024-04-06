import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EpisodesTable } from "../components/episodesTable";
import { PodcastLateralDetails } from "../components/podcastLateralDetails";
import { finishLoadingDetails, setPodcastsDetails, startLoadingDetails } from "../reducers/actions";
import { getPodcastDetails } from "../utils";


export const Podcast = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { podcastId } = useParams()

  const { podcastsDetails } = useSelector(store => store.podcastsDetails)
  const { podcasts } = useSelector(store => store.podcastsList)

  const currentPodcast = podcasts.find(podcast => podcast.id === podcastId)
  const currentPodcastDetails = podcastsDetails[podcastId]

  useEffect(() => {
    if (!currentPodcastDetails || (new Date().getTime() - currentPodcastDetails.lastUpdated > 864000000)) {
      dispatch(startLoadingDetails())
      getPodcastDetails(podcastId)
        .then(data => {
          const contents = JSON.parse(data.contents)
          dispatch(setPodcastsDetails({ ...podcastsDetails, [podcastId]: { ...contents.results[0], episodes: [...contents.results.slice(1)], lastUpdated: new Date().getTime() } }))
        }).finally(() => dispatch(finishLoadingDetails()))
        .catch((error) => {
          console.error('Something went wrong retrieving podcast details', error)
          dispatch(finishLoadingDetails())
        })
    }
  }, [])

  const handleClick = (episodeId) => navigate(`/podcast/${podcastId}/episode/${episodeId}`)

  if (currentPodcastDetails) {
    return (
      <div className="podcast-details">

        <PodcastLateralDetails currentPodcast={currentPodcast} currentPodcastDetails={currentPodcastDetails} />

        <div className="podcast-episodes">
          <div className="podcast-episodes-counter shadowed-surface">
            <h2>Episodes: {currentPodcastDetails.trackCount}</h2>
          </div>

          <div className="podcast-episodes-table shadowed-surface">
            <EpisodesTable episodes={currentPodcastDetails.episodes} onClick={handleClick} />

          </div>
        </div>

      </div>
    );
  }

}
