import React from 'react'
import {StyleProvider} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

//rootReducer
import rootReducer from './reducers'

// Redux store
import configureStore from './lib/configureStore';

//modulos
import Login from './modulos/Login'

// Configuring redux store
const store = configureStore({}, rootReducer);

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
)
export default App
