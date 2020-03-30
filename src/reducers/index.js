import { combineReducers } from "redux";
import AuthReducers from './authReducers'
import HandReducers from './handReducers';
import DrawPileReducers from './drawPileReducers';

const rootReducer = combineReducers({
  auth: AuthReducers,
  hand: HandReducers,
  drawPile: DrawPileReducers,
})

export default rootReducer;