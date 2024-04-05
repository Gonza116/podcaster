import { useSelector } from "react-redux"

export const Header = () => {
    const { loading: loadingPodcasts } = useSelector(store => store.podcastsList)
    const { loading: loadingDetails } = useSelector(store => store.podcastsDetails)

    return <div className="header">
        <h1>Podcaster</h1>
        {loadingPodcasts && <p>Cargando podcasts</p>}
        {loadingDetails && <p>Cargando detalle</p>}
    </div>
}