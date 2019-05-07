import axios from 'axios';

export const updateWorkout = id => {
  return axios.post(`/api/posts/${id}`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios('/api/workouts')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/workouts/${postId}`)
              .then(resp => resp.data);
};

export const add = (newLocation, newType, newLength) => {
  var bar = '' + newLength;
  console.log(JSON.stringify(bar));
  
  return axios.post('/api/workouts', { location: newLocation, type: newType, length:JSON.stringify(bar)})
              .then(resp => resp);
};