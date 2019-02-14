import axios from 'axios';

const REQUEST_URL = 'https://ddm-project.herokuapp.com/api/2/all';

export const fetchPosts = () => {
  const request = axios.get(`${REQUEST_URL}`);

  return {
    type: 'FETCH_POSTS',
    payload: request
  };
};

export const fetchPost = (id) => {
  const request = axios.get(`https://ddm-project.herokuapp.com/api/2/all`)

  return {
    type: 'FETCH_POST',
    payload: request
  };
}
