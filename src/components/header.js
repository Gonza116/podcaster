import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import LoadingBlue from '../assets/images/loading-blue.gif'
import LoadingOrange from '../assets/images/loading-orange.gif'

export const Header = () => {
    const { loading: loadingPodcasts } = useSelector(store => store.podcastsList)
    const { loading: loadingDetails } = useSelector(store => store.podcastsDetails)

    return <div className="header">
        <h1><Link to="/">Podcaster</Link></h1>
        {loadingPodcasts && <img src={LoadingBlue} alt="loading podcasts" />}
        {loadingDetails && <img src={LoadingOrange} alt="loading podcast details" />}
    </div>
}