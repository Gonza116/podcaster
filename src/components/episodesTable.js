import { useState } from "react";
import { getFormatedDate, getFormatedDuration } from "../utils";
import { EPISODES_PER_PAGE } from "../utils/constants";


export const EpisodesTable = ({ episodes, onClick }) => {
    const [currentPage, setCurrentPage] = useState(0)

    const maxPage = Math.floor(episodes.length / EPISODES_PER_PAGE) - 1

    return <>
        <table>
            <thead>
                <tr>
                    <th id="title">Title</th>
                    <th id="date">Date</th>
                    <th id="duration">Duration</th>
                </tr>
            </thead>
            <tbody>
                {episodes.slice(currentPage * EPISODES_PER_PAGE, (currentPage + 1) * EPISODES_PER_PAGE).map(episode =>
                    <tr key={episode.id} onClick={() => onClick(episode.id)}>
                        <td id="title">{episode.title}</td>
                        <td id="date">{getFormatedDate(new Date(episode.date))}</td>
                        <td id="duration">{getFormatedDuration(episode.duration)}</td>
                    </tr>)}
            </tbody>
        </table>
        <div className="paginator">
            <button className={currentPage === 0 ? 'disabled' : 0} onClick={() => setCurrentPage(0)}>First</button>
            <button className={currentPage === 0 ? 'disabled' : 0} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <p>Page {currentPage + 1} of {maxPage + 1}</p>
            <button className={currentPage === maxPage ? 'disabled' : 0} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            <button className={currentPage === maxPage ? 'disabled' : 0} onClick={() => setCurrentPage(maxPage)}>Last</button>
        </div>
    </>
}