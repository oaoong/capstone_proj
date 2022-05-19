import { SET_CURRENT_VIDEO } from "../_actions/types";

const initialVideoState = {
  currentVideo: null,
  isValidVideo: true,
};

export default function (state = initialVideoState, action) {
  switch (action.type) {
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: action.payload,
      };
    default:
      return state;
  }
}
