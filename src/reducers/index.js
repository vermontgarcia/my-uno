import { combineReducers } from "redux";
import AuthReducers from './authReducers'
import HandReducers from './handReducers';
import DrawPileReducers from './drawPileReducers';

const rootReducer = combineReducers({
  auth: AuthReducers,
  hand: HandReducers,
  deck: DrawPileReducers,
})

export default rootReducer;