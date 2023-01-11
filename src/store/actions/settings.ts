import { settingsActions } from "../vars/settings";
import { statusActions } from "../vars/status";
import { Dispatch } from "redux";

export const changeSoundOnOff = (newValue: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: settingsActions.changeSound,
      payload: newValue === 2,
    });
  };
};
export const stopStartMusic = (isWork: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: settingsActions.stopStart,
        payload: isWork,
      });
    } catch (e) {
      dispatch({
        type: settingsActions.error,
        payload: [],
      });
    }
  };
};
export const changeWorkInterval = (interval: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: statusActions.updatePauseTime,
        payload: 0,
      });
      localStorage.workInterval = interval * 60000;
      dispatch({
        type: settingsActions.changeWorkInterval,
        payload: interval * 60000,
      });
      dispatch({
        type: statusActions.truncateTime,
      });
    } catch (e) {
      dispatch({
        type: settingsActions.error,
        payload: [],
      });
    }
  };
};
export const changeRestInterval = (interval: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: statusActions.updatePauseTime,
        payload: 0,
      });
      localStorage.restInterval = interval * 60000;
      dispatch({
        type: settingsActions.changeRestInterval,
        payload: interval * 60000,
      });
      dispatch({
        type: statusActions.truncateTime,
      });
    } catch (e) {
      dispatch({
        type: settingsActions.error,
        payload: [],
      });
    }
  };
};
export const changePlaylist = (url: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: settingsActions.changePlaylist,
        payload: url,
      });
    } catch (e) {
      dispatch({
        type: settingsActions.error,
        payload: false,
      });
    }
  };
};
