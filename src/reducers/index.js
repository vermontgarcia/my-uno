import { combineReducers } from "redux";
import AuthReducers from './authReducers'
import GameReducers from './gameReducers';

const rootReducer = combineReducers({
  auth: AuthReducers,
  game: GameReducers,
})

export default rootReducer;