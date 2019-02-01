import axios from 'axios';

import { GET_USER } from './types';

// GET User
export const getUser = () => dispatch => {
  axios
    .get('some api call')
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
