// API
import dataUser from './api';

// Actions
const LOGIN_USER = 'LOGIN_USER';

export function login() {
  console.log('LOGIN_USER');
  return {
    type: LOGIN_USER,
    payload: dataUser.getUser()
  };
}
