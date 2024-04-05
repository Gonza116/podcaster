import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { finishLoadingPodcasts, setPodcastsList, startLoadingPodcasts } from "../reducers/actions";
import { trimPodcastList } from "../utils";


export const MainPage = () => {

  const navigate = useNavigate()

  const { podcasts, lastUpdated } = useSelector(store => store.podcastsList)
  const dispatch = useDispatch()

  const [searchbarInput, setSearchbarInput] = useState('')
  const [podcastsToShow, setPodcastsToShow] = useState(podcasts)

  useEffect(() => {
    if (new Date().getTime() - lastUpdated > 864000000) {
      dispatch(startLoadingPodcasts())
      fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then(response => response.json()
          .then(data => {
            const podcastsList = trimPodcastList(data.feed.entry)
            dispatch(setPodcastsList(podcastsList))
          }).finally(() => dispatch(finishLoadingPodcasts())))
        .catch((error) => {
          console.error('Something went wrong retrieving podcasts list', error)
          dispatch(finishLoadingPodcasts())
        })
    }
  }, [])

  useEffect(() => {
    setPodcastsToShow(podcasts)
  }, [podcasts])

  useEffect(() => {
    if (searchbarInput && searchbarInput !== '') {
      const searchTerms = searchbarInput.toLowerCase().trim()
      const newPodcastsToShow = podcasts.filter(podcast => podcast.name.toLowerCase().includes(searchTerms) || podcast.author.toLowerCase().includes(searchTerms))
      setPodcastsToShow(newPodcastsToShow)

    } else {
      setPodcastsToShow(podcasts)
    }
  }, [searchbarInput])

  const handleClick = (id) => {
    navigate(`/podcast/${id}`)
  }

  return (<>
    <div className="searchbar">
      <p>{podcastsToShow.length}</p>
      <input value={searchbarInput} onChange={e => setSearchbarInput(e.target.value)} placeholder="Filter podcasts..." />
    </div>
    <div className="podcast-list">
      {podcastsToShow.map(podcast => <div className="podcast-item shadowed-surface" onClick={() => { handleClick(podcast.id) }}>
        <img src={podcast.image} />
        <h2>{podcast.name}</h2>
        <p>Author: {podcast.author}</p>
      </div>)}
    </div>

  </>
  );
}


