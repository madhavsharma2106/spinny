import { FETCH_RESULTS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
