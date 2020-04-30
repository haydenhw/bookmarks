import axios from 'axios';
const API_ROOT = 'http://localhost:8000/api';

const requests = {
  get(url) {
    return axios.get(`${API_ROOT}${url}`).then(({ data }) => data);
  },
  post(url, body) {
    return axios.post(`${API_ROOT}${url}`, body).then(({ data }) => data);
  },
  patch(url, body) {
    return axios.patch(`${API_ROOT}${url}`, body).then(({ data }) => data);
  },
  delete(url, body) {
    return axios.delete(`${API_ROOT}${url}`).then(({ data }) => data);
  },
};

const api = {
  fetchBookmarks() {
    return requests.get('/bookmarks');
  },
  createBookmark(newBookmark) {
    return requests.post('/bookmarks', newBookmark);
  },
  updateBookmark(bookmarkId, updatedBookmark) {
    return requests.patch(`/bookmarks/${bookmarkId}`, updatedBookmark);
  },
  deleteBookmark(id) {
    return requests.delete(`/bookmarks/${id}`);
  },
};

export default api;
