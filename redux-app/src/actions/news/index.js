import { LOADING, FILL_NEWS, RECEIVED_NEWS, DELETE_NEWS } from "./actions";

export const loading = (status = true) => ({
  type: LOADING,
  status
});

export const fillNews = news => ({
  type: FILL_NEWS,
  news
});

export const receivedNews = news => ({
  type: RECEIVED_NEWS,
  news
});

export const deleteNews = id => ({
  type: DELETE_NEWS,
  id
});
