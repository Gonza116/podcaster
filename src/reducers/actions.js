export const setPodcastsList = (data) => ({
  type: "UPDATE_PODCASTS",
  payload: data,
});

export const startLoadingPodcasts = () => ({
  type: "START_LOADING_PODCASTS",
});

export const finishLoadingPodcasts = () => ({
  type: "FINISH_LOADING_PODCASTS",
});

export const setPodcastsDetails = (data) => ({
  type: "UPDATE_DETAILS",
  payload: data,
});

export const startLoadingDetails = () => ({
  type: "START_LOADING_DETAILS",
});

export const finishLoadingDetails = () => ({
  type: "FINISH_LOADING_DETAILS",
});
