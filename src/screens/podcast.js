import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PodcastLateralDetails } from "../components/podcastLateralDetails";
import { finishLoadingDetails, setPodcastsDetails, startLoadingDetails } from "../reducers/actions";
import { getFormatedDate, getFormatedDuration } from "../utils";


export const Podcast = () => {
  const { podcastId } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { podcastsDetails } = useSelector(store => store.podcastsDetails)
  const { podcasts } = useSelector(store => store.podcastsList)

  const currentPodcast = podcasts.find(podcast => podcast.id === podcastId)
  const currentPodcastDetails = podcastsDetails[podcastId]

  useEffect(() => {
    if (!currentPodcastDetails || (new Date().getTime() - currentPodcastDetails.lastUpdated > 864000000)) {
      dispatch(startLoadingDetails())
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`)}`)
        .then(response => response.json()
          .then(data => {
            const contents = JSON.parse(data.contents)
            dispatch(setPodcastsDetails({ ...podcastsDetails, [podcastId]: { ...contents.results[0], episodes: [...contents.results.slice(1)], lastUpdated: new Date().getTime() } }))
          }).finally(() => dispatch(finishLoadingDetails())))
        .catch((error) => {
          console.error('Something went wrong retrieving podcasts list', error)
          dispatch(finishLoadingDetails())
        })
    }
  }, [])

  if (currentPodcastDetails) {
    return (
      <div className="podcast-details">

        <PodcastLateralDetails currentPodcast={currentPodcast} currentPodcastDetails={currentPodcastDetails} />

        <div className="podcast-episodes">
          <div className="podcast-episodes-counter shadowed-surface">
            <h2>Episodes: {currentPodcastDetails.trackCount}</h2>
          </div>

          <div className="podcast-episodes-table shadowed-surface">
            <table>
              <thead>
                <tr>
                  <th id="title">Title</th>
                  <th id="date">Date</th>
                  <th id="duration">Duration</th>
                </tr>
              </thead>
              <tbody>
                {currentPodcastDetails.episodes.map(episode => <tr key={episode.trackId} onClick={() => navigate(`/podcast/${podcastId}/episode/${episode.trackId}`)}>
                  <td id="title">{episode.trackName}</td>
                  <td id="date">{getFormatedDate(new Date(episode.releaseDate))}</td>
                  <td id="duration">{getFormatedDuration(episode.trackTimeMillis)}</td>
                </tr>)}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    );
  }

}
