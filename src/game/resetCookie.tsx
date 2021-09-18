import { useEffect, useState } from 'react';

const AUTH_KEY = 'auth_key';

export const ResetCookie = () => {
  useEffect(() => {
    localStorage.setItem(AUTH_KEY, '');
    window.location.href = '/game/login';
  }, []);
  return null
}

export default ResetCookie;