import { FETCH_RESULTS } from "./types";

export const fetchSearchResults = (query, page = 1) => dispatch => {
  fetch(
    `https://api.jikan.moe/v3/search/anime?q=${query}&limit=10&page=${page}`
  )
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_RESULTS,
        payload: res.results
      });
    });
};
