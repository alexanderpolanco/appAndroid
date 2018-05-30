// Utils
import { getNewState } from '../../lib/utils';

const initialState = {
  user: []
};

export default function loginReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_USER_SUCCESS': {
      const { payload: { response = [] }} = action;
      console.log('LOGIN_USER_SUCCESS');
      return getNewState(state, {
        user: response
      });
    }

    default:
      return state;
  }
}
