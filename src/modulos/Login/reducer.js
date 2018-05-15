// Utils
import { getNewState } from '../../lib/utils/frontend';

const initialState = {
  user: []
};

export default function loginReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_USER_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        user: response
      });
    }

    default:
      return state;
  }
}
