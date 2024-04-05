import { useSelector } from "react-redux"
import LoadingBlue from '../assets/images/loading-blue.gif'
import LoadingOrange from '../assets/images/loading-orange.gif'

export const Header = () => {
    const { loading: loadingPodcasts } = useSelector(store => store.podcastsList)
    const { loading: loadingDetails } = useSelector(store => store.podcastsDetails)

    return <div className="header">
        <h1>Podcaster</h1>
        {loadingPodcasts && <img src={LoadingBlue} alt="loading podcasts" />}
        {loadingDetails && <img src={LoadingOrange} alt="loading podcast details" />}
    </div>
}