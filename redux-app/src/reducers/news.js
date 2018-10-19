import { LOADING } from "../actions/news/actions";

const news = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.status };
    default:
      return state;
  }
};

export default news;
