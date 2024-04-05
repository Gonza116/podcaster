import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { finishLoadingPodcasts, setPodcastsList, startLoadingPodcasts } from "../reducers/actions";


export const MainPage = () => {

  const navigate = useNavigate()

  // const [podcasts, setPodcasts] = useState([])

  const { podcasts, lastUpdated } = useSelector(store => store.podcastsList)
  const dispatch = useDispatch()


  useEffect(() => {
    if (new Date().getTime() - lastUpdated > 864000000) {
      dispatch(startLoadingPodcasts())
      fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then(response => response.json()
          .then(data => dispatch(setPodcastsList(data.feed.entry))).finally(() => dispatch(finishLoadingPodcasts())))
        .catch((error) => {
          console.error('Something went wrong retrieving podcasts list', error)
        })
    }


  }, [])

  const handleClick = (id) => {
    navigate(`/podcast/${id}`)
  }

  return (
    <div className="podcast-list">
      {podcasts.map(podcast => <div className="podcast-item" onClick={() => { handleClick(podcast.id.attributes['im:id']) }}>
        <img src={podcast['im:image'][podcast['im:image'].length - 1].label} />
        <h2>{podcast['im:name'].label}</h2>
        <p>Author: {podcast['im:name'].label}</p>
      </div>)}
    </div>
  );
}


