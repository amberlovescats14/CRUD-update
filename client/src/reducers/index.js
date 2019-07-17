import {combineReducers} from "redux";

const musicArray = (state=[], action) => {
  switch(action.type){
    default: return [...state]
  }
}
const homeState = (state="", action) => {
  switch(action.state){
    default: return state
  }
}


const rootReducer = combineReducers({
  music: musicArray,
  home: homeState
});
export default rootReducer;
