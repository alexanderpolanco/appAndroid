// API
import dataUser from './api';

// Actions
const LOGIN_USER = 'LOGIN_USER';

export function login() {
  return {
    type: LOGIN_USER,
    payload: dataUser.getUser()
  };
}
