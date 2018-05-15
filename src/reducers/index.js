import {combineReducers} from 'redux'
import login from '../modulos/Login/reducer'

//combineReducers nos permite crear diferentes combineReducers
//aquí le pasamos el reducer que llama al archivo json con los superheroes

const rootReducer = combineReducers({
  login
});

export default rootReducer;
