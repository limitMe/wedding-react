import axios from "axios";
import config from '../config.json';


const AUTH_KEY = 'auth_key';

export const get = async (url: string, auth?: string) => {
  const newAuth = auth ?? defaultAuth();
  try {
    const response = await axios.get(`http://${config.server}:${config.port}${url}`, {
      headers: {
        'authorization': newAuth
      }
    });
    const success = generalResponseCheck(response);
    return success ? response.data: {};
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
    const success = generalResponseCheck(response);
    return success ? response.data: {};
  } catch (error) {
    errorHandler(error);
  }
}

const defaultAuth = () => {
  localStorage.getItem(AUTH_KEY)
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

    }
    return false;
  }
  return true;
}