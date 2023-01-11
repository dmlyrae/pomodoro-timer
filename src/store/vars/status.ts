import { parseInt } from "lodash";

export type TStatusState = {
  work: boolean;
  time: number;
  lastTick: number;
  startTime: number;
  now: "work" | "rest";
  pauseTime: number;
};
export const defaultState: TStatusState = {
  lastTick: 0,
  work: localStorage.pauseTime
    ? localStorage.pauseTime === "0"
    : localStorage.timerIsWork
      ? localStorage.timerIsWork === "1"
      : ((localStorage.timerIsWork = "0"), false),
  time: localStorage.startTime
    ? (function() {
      const timerEnd =
        localStorage.pauseTime && localStorage.pauseTime !== "0"
          ? parseInt(localStorage.pauseTime)
          : Date.now();
      return timerEnd - parseInt(localStorage.startTime);
    })()
    : ((localStorage.time = 0), parseInt(localStorage.time)),
  startTime: localStorage.startTime
    ? localStorage.startTime
    : ((localStorage.startTime = Date.now()), parseInt(localStorage.startTime)),
  now: localStorage.now
    ? localStorage.now
    : ((localStorage.now = "work"), "work"),
  pauseTime: localStorage.pauseTime
    ? localStorage.pauseTime
    : ((localStorage.pauseTime = 0), 0),
};

export const statusActions = {
  startStop: "SS_STATUS",
  changeTime: "CHANGE_TIME_STATUS",
  changeNowValue: "CHANGE_CURRENT_INTERVAL",
  setNowValue: "SET_CURRENT_INTERVAL",
  error: "ERROR_TIME_STATUS",
  updateStartTime: "UPDATE_START_TIME",
  updatePauseTime: "UPDATE_PAUSE_TIME",
  refreshStatus: "REFRESH_STATUS",
  tickTack: "UP_CURRENT_TIME",
  truncateTime: "TRUNCATE_START_TIME",
  updateTime: "UPDATE_TIME",
};
