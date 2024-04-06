import { getFormatedDate, getFormatedDuration } from "../utils";


export const EpisodesTable = ({ episodes, onClick }) => {
    return <table>
        <thead>
            <tr>
                <th id="title">Title</th>
                <th id="date">Date</th>
                <th id="duration">Duration</th>
            </tr>
        </thead>
        <tbody>
            {episodes.map(episode => <tr key={episode.trackId} onClick={() => onClick(episode.trackId)}>
                <td id="title">{episode.trackName}</td>
                <td id="date">{getFormatedDate(new Date(episode.releaseDate))}</td>
                <td id="duration">{getFormatedDuration(episode.trackTimeMillis)}</td>
            </tr>)}
        </tbody>
    </table>
}