import axios from 'axios';

// export const upvote = postId => {
//   return axios.post(`/api/posts/${postId}/upvote`)
//               .then(resp => resp.data);
// };

export const getAll = () => {
   return axios('/api/workouts')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/workouts/${postId}`)
              .then(resp => resp.data);
};

export const add = (newLocation, newType,newLength) => {
  return axios.post('/api/workouts', { location: newLocation, type: newType, length: newLength })
              .then(resp => resp.data);
};