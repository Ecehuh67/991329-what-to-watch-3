import axios from 'axios';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    console.log('data has uploaded');
    return response
  }

  const onFail = (err) => {
    const {response} = err;
    console.log(`Smth bad has happend: ${response}`);

    throw err;
  }

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
