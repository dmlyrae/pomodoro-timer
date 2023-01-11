type TSettings = {
  url: string;
  playMusic: boolean;
  workInterval: number;
  restInterval: number;
  soundOn: boolean;
};
export const defaultState: TSettings = {
  url: localStorage.url ? localStorage.url : ((localStorage.url = ""), ""),
  playMusic: localStorage.playMusic
    ? localStorage.playMusic
    : ((localStorage.playMusic = 0), 0),
  workInterval: localStorage.workInterval
    ? localStorage.workInterval
    : ((localStorage.workInterval = 60000 * 5),
      parseInt(localStorage.workInterval)),
  restInterval: localStorage.restInterval
    ? localStorage.restInterval
    : ((localStorage.restInterval = 60000),
      parseInt(localStorage.restInterval)),
  soundOn: localStorage.soundOn
    ? localStorage.soundOn === "1"
    : ((localStorage.soundOn = "1"), true),
};

export const settingsActions = {
  changePlaylist: "CHANGE_PLAYLIST",
  stopStart: "SS_MUSIC",
  changeWorkInterval: "CHANGE_WORK_INTERVAL",
  changeRestInterval: "CHANGE_REST_INTERVAL",
  error: "SETTINGS_ERROR",
  changeSound: "CHANGE_SOUND",
};
