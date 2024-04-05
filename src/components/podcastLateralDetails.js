import { Link } from "react-router-dom"

export const PodcastLateralDetails = ({ currentPodcastDetails, currentPodcast }) => {



    return <div className="details-lateral shadowed-surface">
        <Link to={`/podcast/${currentPodcast.id}`}>
            <img src={currentPodcastDetails.artworkUrl600} />
        </Link>
        <hr />
        <Link to={`/podcast/${currentPodcast.id}`}>
            <h3>{currentPodcast.name}</h3>
        </Link>
        <h5>by  <Link to={`/podcast/${currentPodcast.id}`}>{currentPodcast.author}</Link></h5>
        <hr />
        <h4>Description:</h4>
        <p>{currentPodcast.description}</p>
    </div>
}