import { statusActions, TStatusState } from "../vars/status";
import { Dispatch } from "redux";

export const changeNowValue = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.changeNowValue,
    });
  };
};
export const setNowValue = (now: "work" | "rest") => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.changeNowValue,
      payload: now,
    });
  };
};
export const updatePauseTime = (newPauseTime: number) => {
  return (dispatch: Dispatch) => {
    localStorage.pauseTime = newPauseTime;
    dispatch({
      type: statusActions.updatePauseTime,
      payload: newPauseTime,
    });
  };
};
export const updateStartTime = (newStartTime: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.updateStartTime,
      payload: newStartTime,
    });
  };
};
export const refreshTimer = (newStatus: TStatusState) => {
  localStorage.timerIsWork = 1;
  localStorage.time = newStatus.time;
  localStorage.startTime = newStatus.startTime;
  localStorage.now = newStatus.now;
  localStorage.pauseTime = newStatus.pauseTime;
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.refreshStatus,
      payload: newStatus,
    });
  };
};
export const startStopTimer = (isWork: boolean) => {
  const timeNow = Date.now();
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: statusActions.startStop,
        payload: isWork,
      });
      if (isWork) {
        dispatch({
          type: statusActions.updateStartTime,
          payload: timeNow,
        });
      }
      localStorage.pauseTime = isWork ? 0 : timeNow;
      dispatch({
        type: statusActions.updatePauseTime,
        payload: isWork ? 0 : timeNow,
      });
    } catch (e) {
      dispatch({
        type: statusActions.error,
        payload: false,
      });
    }
  };
};
export const truncateTime = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.truncateTime,
    });
  };
};
export const tickTack = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.tickTack,
    });
  };
};
export const updateTime = (newTime: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: statusActions.updateTime,
      payload: newTime,
    });
  };
};
