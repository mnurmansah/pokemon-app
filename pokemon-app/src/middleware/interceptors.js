/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';
import { auth } from '../utils/api';

const accessToken = 'access-token';
const refreshToken = 'refresh-token';

export default async () => {
  const existingToken = Cookies.get(accessToken);

  if (!existingToken) {
    const payload = {
      username: 'momox3@mail.com',
      password: '123456',
    };
    const result = await auth(payload);
    Cookies.set(accessToken, result.data.access_token);
    Cookies.set(refreshToken, result.data.refresh_token);
  }

  await axios.interceptors.request.use((config) => {
    const token = existingToken;

    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = 'proj-dompet';
    config.headers['Access-Control-Allow-Methods'] = 'GET,POST,PATCH,OPTION';

    return config;
  }, (error) => Promise.reject(error));
};
