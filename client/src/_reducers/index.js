import { combineReducers } from "redux";
import video from "./video_reducer";

const rootReducer = combineReducers({
  video,
});

export default rootReducer;
