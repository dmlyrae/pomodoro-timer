import { defaultState, statusActions } from "../vars/status";

export const statusReducer: any = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case statusActions.tickTack:
      const timeNow = Date.now();
      if (timeNow - state.lastTick < 1500) {
        return {
          ...state,
          time: state.time + (timeNow - state.lastTick),
          lastTick: timeNow,
        };
      }
      return { ...state, time: state.time + 1000, lastTick: timeNow };
    case statusActions.truncateTime:
      return { ...state, startTime: Date.now() - state.time };
    case statusActions.setNowValue:
      if (action.payload === state.now) return state;
      return { ...state, now: action.payload };
    case statusActions.refreshStatus:
      return { ...action.payload };
    case statusActions.startStop:
      localStorage.timerIsWork = action.payload ? 1 : 0;
      return { ...state, work: action.payload };
    case statusActions.changeTime:
      return { ...state, time: action.payload };
    case statusActions.changeNowValue:
      localStorage.now = state.now === "work" ? "rest" : "work";
      return {
        ...state,
        now: localStorage.now,
        time: 0,
      };
    case statusActions.updateStartTime:
      return {
        ...state,
        startTime: action.payload,
      };
    case statusActions.updatePauseTime:
      return { ...state, pauseTime: action.payload };
    case statusActions.updateTime:
      return { ...state, time: action.payload, lastTick: Date.now() };
    default:
      return { ...state };
  }
};
