import { defaultState, settingsActions } from "../vars/settings";

export const settingsReducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case settingsActions.changePlaylist:
      return { ...state, url: action.payload };
    case settingsActions.changeSound:
      localStorage.soundOn = action.payload ? 1 : 0;
      return { ...state, soundOn: action.payload };
    case settingsActions.stopStart:
      return { ...state, playMusic: action.payload };
    case settingsActions.changeWorkInterval:
      return {
        ...state,
        workInterval: action.payload,
      };
    case settingsActions.changeRestInterval:
      return {
        ...state,
        restInterval: action.payload,
      };
    default:
      return { ...state };
  }
};
