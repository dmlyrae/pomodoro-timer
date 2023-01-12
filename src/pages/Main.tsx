import React, { useState } from "react";
import Timer from "../components/UI/Timer";
import PlayButton from "../components/UI/PlayButton";
import ResetButton from "../components/UI/ResetButton";
import Forward from "../components/UI/icons/Forward";
import Approve from "../components/UI/icons/Approve";
import TodoButton from "../components/UI/TodoButton";
import SettingsButton from "../components/UI/SettingButton";
import { Container, Row, CurrentLine } from "../styles/components";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { baseTheme } from "../styles/theme";
import { Modal } from "../components/UI/Modal";

const Main = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const { work } = useSelector((store: any) => store.status);
  const { currentWork } = useSelector((store: any) => store.todo);
  const { startStopTimer, refreshTimer, nextTodo, removeTodo, addTodo } =
    useActions();
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        addTodo={addTodo}
      />
      <CurrentLine>
        <span
          className="button"
          onClick={() => {
            removeTodo(currentWork);
          }}
        >
          <Approve
            colors={[baseTheme.colors.green, baseTheme.colors.darkBackground]}
            size={"1.3em"}
          />
        </span>
        <span className="text" onClick={openModal}>
          {currentWork === "" ? "add task" : currentWork}
        </span>
        <span
          className="button"
          onClick={() => {
            nextTodo(currentWork);
          }}
        >
          <Forward
            colors={[baseTheme.colors.darkColor, baseTheme.colors.lightColor]}
            size={"1.3em"}
          />
        </span>
      </CurrentLine>
      <Container>
        <Timer pause={false} />
      </Container>
      <Container>
        <Row>
          <PlayButton
            active={true}
            message={""}
            onClick={() => {
              startStopTimer(!work);
            }}
          />
          <ResetButton
            active={true}
            message={""}
            onClick={() => {
              startStopTimer(false);
              refreshTimer({
                lastTick: 0,
                work: true,
                time: 0,
                startTime: Date.now() - 1,
                now: "work",
                pauseTime: 0,
              });
            }}
          />
        </Row>
      </Container>
      <Container>
        <SettingsButton
          active={true}
          message={"settings"}
          buttonSize="2em"
          onClick={() => {
            navigate("/settings", { replace: false });
          }}
        />
        <TodoButton
          active={true}
          message={"todo list"}
          buttonSize="2em"
          onClick={() => {
            navigate("/todos", { replace: false });
          }}
        />
      </Container>
    </>
  );
};
export default Main;
