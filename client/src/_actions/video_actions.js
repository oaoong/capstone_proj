import { SET_CURRENT_VIDEO } from "../_actions/types";

export function setCurrentVideo(currentVideo) {
  return {
    type: SET_CURRENT_VIDEO,
    payload: currentVideo,
  };
}
