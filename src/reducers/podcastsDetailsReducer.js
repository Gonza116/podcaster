const initialState = {
    podcastsDetails: {},
    loading: false,
}

const PodcastsDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_LOADING_DETAILS':
            return { ...state, loading: true };
        case 'UPDATE_DETAILS':
            return { ...state, podcastsDetails: action.payload };
        case 'FINISH_LOADING_DETAILS':
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default PodcastsDetailsReducer;