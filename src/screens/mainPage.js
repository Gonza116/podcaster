import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { finishLoadingDetails, finishLoadingPodcasts, setPodcastsList, startLoadingPodcasts } from "../reducers/actions";
import { getPodcastsList, trimPodcastList } from "../utils";


export const MainPage = () => {

  const navigate = useNavigate()

  const { podcasts, lastUpdated } = useSelector(store => store.podcastsList)
  const dispatch = useDispatch()

  const [searchbarInput, setSearchbarInput] = useState('')
  const [podcastsToShow, setPodcastsToShow] = useState(podcasts)

  useEffect(() => {
    dispatch(finishLoadingDetails())
    if (new Date().getTime() - lastUpdated > 864000000) {
      dispatch(startLoadingPodcasts())
      getPodcastsList()
        .then(data => {
          const podcastsList = trimPodcastList(data.feed.entry)
          dispatch(setPodcastsList(podcastsList))
        })
        .finally(() => dispatch(finishLoadingPodcasts()))
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
      {podcastsToShow.map(podcast => <div key={podcast.id} className="podcast-item shadowed-surface" onClick={() => { handleClick(podcast.id) }}>
        <img src={podcast.image} />
        <h2>{podcast.name}</h2>
        <p>Author: {podcast.author}</p>
      </div>)}
    </div>
  </>
  );
}


