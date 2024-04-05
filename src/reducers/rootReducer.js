import PodcastsListReducer from "./podcastsListReducer";
import { combineReducers } from 'redux'
import PodcastsDetailsReducer from "./podcastsDetailsReducer";

const rootReducer = combineReducers({
    podcastsList: PodcastsListReducer,
    podcastsDetails: PodcastsDetailsReducer
})

export default rootReducer