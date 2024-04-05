const initialState = {
    podcasts: [],
    loading: false,
    lastUpdated: 0
}

const PodcastsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'START_LOADING_PODCASTS':
            return {...state, loading: true};
        case 'UPDATE_PODCASTS':
            return {...state, podcasts: action.payload, lastUpdated: new Date().getTime()}
        case 'FINISH_LOADING_PODCASTS':
            return {...state, loading: false}
        default:
            return state;
    }
}

export default PodcastsListReducer;