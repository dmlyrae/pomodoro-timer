import React from "react";
import ReturnButton from "../components/UI/ReturnButton";
import { Container } from "../styles/components";
import Slider from "../components/UI/Slider";
import Checkbox from "../components/UI/Checkbox";
import { Label } from "../styles/components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const Settings = () => {
  const navigate = useNavigate();
  const { changeRestInterval, changeWorkInterval, changeSoundOnOff } =
    useActions();
  const { workInterval, restInterval, soundOn } = useSelector(
    (store: any) => store.settings
  );

  return (
    <>
      <Container>
        <ReturnButton
          active={true}
          message={"go back"}
          buttonSize="2em"
          onClick={() => navigate("/", { replace: true })}
        />
      </Container>
      <Container>
        <div style={{ textAlign: "left" }}>
          <Label>work minutes: {workInterval / 60000}:00</Label>
          <Slider
            colorClass="red"
            value={workInterval / 60000}
            onChange={changeWorkInterval}
          />
          <Label>rest minutes: {restInterval / 60000}:00</Label>
          <Slider
            colorClass="green"
            value={restInterval / 60000}
            onChange={changeRestInterval}
          />
          <Label>sound: {soundOn ? "on" : "off"}</Label>
          <Checkbox
            colorClass={soundOn ? "on" : "off"}
            value={soundOn ? 2 : 1}
            onChange={changeSoundOnOff}
          />
        </div>
      </Container>
      <Container></Container>
    </>
  );
};
export default Settings;
