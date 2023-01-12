import { useEffect, useRef, useMemo } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import { baseTheme } from "../../styles/theme";
import { CenteredDiv } from "../../styles/components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { statusActions } from "../../store/vars/status";
import { useActions } from "../../hooks/useActions";
import useSound from "use-sound";
import tickTackMp3 from "../../sounds/ticktack.mp3";
import restendMp3 from "../../sounds/restend.mp3";
import workendMp3 from "../../sounds/workend.mp3";

const Timer = ({ pause }: { pause: boolean }) => {
  const dispatch = useDispatch();
  const { setNowValue, tickTack } = useActions();
  const { work, now, startTime, pauseTime, time } = useSelector(
    (store: any) => store.status
  );

  const ticktackSounds = [
    useSound(tickTackMp3, { volume: 1 }),
    useSound(tickTackMp3, { volume: 1 }),
    useSound(tickTackMp3, { volume: 0.8 }),
    useSound(tickTackMp3, { volume: 0.6 }),
    useSound(tickTackMp3, { volume: 0.5 }),
    useSound(tickTackMp3, { volume: 0.4 }),
    useSound(tickTackMp3, { volume: 0.3 }),
    useSound(tickTackMp3, { volume: 0.2 }),
    useSound(tickTackMp3, { volume: 0.1 }),
  ];

  const [restendSound] = useSound(restendMp3);
  const [workendSound] = useSound(workendMp3);

  const icon: any = document.getElementById("icon");
  const title: any = document.querySelector("title");

  const { workInterval, restInterval, soundOn } = useSelector(
    (store: any) => store.settings
  );

  const timerId = useRef<any>(null);
  const timeRef = useRef<any>(null);
  timeRef.current = time;

  const currentProgress = useMemo(() => {
    const currentInterval = now === "work" ? workInterval : restInterval;
    if (time >= currentInterval) return 100;
    return parseInt(((100 * time) / currentInterval).toFixed(4));
  }, [time, now]);

  const remainTime = useMemo(() => {
    const currentInterval = now === "work" ? workInterval : restInterval;
    const mainSeconds = Math.round(time / 1000);
    const allSeconds = Math.round((currentInterval - time) / 1000);
    if (soundOn && pauseTime === 0) {
      if (allSeconds < 1) {
        if (now === "work") {
          workendSound();
        } else {
          restendSound();
        }
      } else {
        if (allSeconds < 9) ticktackSounds[allSeconds - 1][0]();
      }
      if (mainSeconds < 8) ticktackSounds[mainSeconds][0]();
    }
    const seconds = allSeconds % 60;
    const minutes = (allSeconds - seconds) / 60;
    return `
    ${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}
    `;
  }, [time, now]);

  useEffect(() => {
    if (time === 0) return;
    const currentInterval = now === "work" ? workInterval : restInterval;
    if (time >= currentInterval) {
      dispatch({ type: statusActions.changeNowValue });
    }
  }, [time]);

  useEffect(() => {
    icon.href = now === "work" ? "./logo.png" : "./logo-rest.png";
    title.innerHTML = now + " time";
  }, [now]);
  useEffect(() => {
    clearInterval(timerId.current);
    if (!work) return;
    // const currentInterval = now === "work" ? workInterval : restInterval;
    timerId.current = setInterval(() => {
      tickTack();
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, [work]);

  useEffect(() => {
    const timeNow = Date.now();
    const timeLast = pauseTime > 0 ? pauseTime : timeNow;
    let timeMain = timeLast - startTime;
    const fullInterval = workInterval + restInterval;
    const currentNowValue =
      timeMain % fullInterval > workInterval ? "rest" : "work";
    setNowValue(currentNowValue);
    const currentInterval =
      currentNowValue === "work" ? workInterval : restInterval;
    if (timeMain <= currentInterval) {
      dispatch({
        type: statusActions.updateTime,
        payload: timeMain,
      });
    } else {
      timeMain = timeMain % fullInterval;
      timeMain = timeMain % workInterval;
      dispatch({
        type: statusActions.updateTime,
        payload: timeMain,
      });
    }
  }, []);

  return (
    <CenteredDiv>
      <CircularProgressbarWithChildren
        value={currentProgress}
        text={remainTime}
        strokeWidth={10}
        styles={buildStyles({
          rotation: 0,
          textColor: baseTheme.colors.darkColor,
          strokeLinecap: "butt",
          pathColor:
            now === "work" ? baseTheme.colors.pomodoro : baseTheme.colors.green,
          trailColor: baseTheme.colors.secondary,
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </CenteredDiv>
  );
};
export default Timer;
