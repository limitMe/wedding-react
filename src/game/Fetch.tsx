import axios from "axios";
import config from '../config.json';


const AUTH_KEY = 'auth_key';
const LOGIN_FAILED_TIMES = 'login_failed_times';

export const get = async (url: string, auth?: string) => {
  const newAuth = auth ?? defaultAuth();
  try {
    const response = await axios.get(`http://${config.server}:${config.port}${url}`, {
      headers: {
        'authorization': newAuth
      }
    });
    generalResponseCheck(response);
    return response.data ?? {};
  } catch (error) {
    errorHandler(error);
  }
}

export const post = async (url: string, body: object, auth?: string) => {
  const newAuth = auth ?? defaultAuth();
  try {
    const response = await axios.post(`http://${config.server}:${config.port}${url}`, body, {
      headers: {
        'authorization': newAuth
      }
    });
    generalResponseCheck(response);
    return response.data ?? {};
  } catch (error) {
    errorHandler(error);
  }
}

const defaultAuth = () => {
  const key = localStorage.getItem(AUTH_KEY);
  return key;
}

const errorHandler = (error: any) => {
  console.error(error);
}

const generalResponseCheck = (response: any) => {
  let data: any;
  if (response === undefined || response.data === undefined) {
    return false;
  }
  data = response.data;
  if (data === undefined || data.success === false) {
    if (data.code === 402) {
      localStorage.setItem(AUTH_KEY, '');
      const times = localStorage.getItem(LOGIN_FAILED_TIMES) ? Number(localStorage.getItem(LOGIN_FAILED_TIMES)): 0;
      localStorage.setItem(LOGIN_FAILED_TIMES, String(times + 1));
      window.location.href = '/game/login';
    }
    return false;
  }
  return true;
}