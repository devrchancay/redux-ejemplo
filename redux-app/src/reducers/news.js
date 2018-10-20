import {
  LOADING,
  FILL_NEWS,
  ADD_NEWS,
  DELETE_NEWS
} from "../actions/news/actions";

const news = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.status };
    case FILL_NEWS:
      return { ...state, data: action.news };
    case ADD_NEWS:
      return { ...state, data: [...state.data, action.news] };
    case DELETE_NEWS:
      const index = state.data.findIndex(item => item.id === action.id);
      return {
        ...state,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)]
      };
    default:
      return state;
  }
};

export default news;
