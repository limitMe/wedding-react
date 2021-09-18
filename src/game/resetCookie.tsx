import { useEffect} from 'react';

const AUTH_KEY = 'auth_key';
const LOGIN_FAILED_TIMES = 'login_failed_times';

export const ResetCookie = () => {
  useEffect(() => {
    localStorage.setItem(AUTH_KEY, '');
    localStorage.setItem(LOGIN_FAILED_TIMES, '0');
    window.location.href = '/game/login';
  }, []);
  return null
}

export default ResetCookie;