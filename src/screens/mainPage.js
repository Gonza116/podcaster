import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const MainPage = () => {

  const navigate = useNavigate()

  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then(response => response.json()
        .then(data => setPodcasts(data.feed.entry)))
  }, [])

  const handleClick = (id) => {
    navigate(`/podcast/${id}`)
  }

  return (
    <div className="podcast-list">
      {podcasts.map(podcast => <div className="podcast-item" onClick={() => {handleClick(podcast.id.attributes['im:id'])}}>
        <img src={podcast['im:image'][podcast['im:image'].length - 1].label} />
        <h2>{podcast['im:name'].label}</h2>
        <p>Author: {podcast['im:name'].label}</p>
      </div>)}
    </div>
  );
}


