// Dependencies
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore(options, rootReducer) {
  const { initialState = {} } = options;

  const middleware = [
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    }),
    reduxImmutableStateInvariant()
  ];

  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
