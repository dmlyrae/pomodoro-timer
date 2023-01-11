import { useState } from "react";
import ReturnButton from "../components/UI/ReturnButton";
import { Container } from "../styles/components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { Button, ListLine } from "../styles/components";
import Plus from "../components/UI/icons/Plus";
import Trash from "../components/UI/icons/Trash";
import { baseTheme } from "../styles/theme";
import { Modal } from "../components/UI/Modal";

const Todo = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { clearTodo, removeTodo, addTodo, setCurrrentTodo } = useActions();
  const { todoList, currentWork } = useSelector((store: any) => store.todo);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        addTodo={addTodo}
      />
      <Container>
        <ReturnButton
          active={true}
          message={"go back"}
          buttonSize="2em"
          onClick={() => navigate("/", { replace: true })}
        />
      </Container>
      <Container>
        <Button buttonSize={"2em"} textIncludes onClick={openModal}>
          <Plus
            colors={[
              baseTheme.colors.lightBackground,
              baseTheme.colors.darkBackground,
            ]}
            size={"2em"}
          />
          <span>{"add todo"}</span>
        </Button>
      </Container>
      <Container>
        {todoList.map((td: string, i: number) => (
          <ListLine key={i} current={currentWork === td}>
            <span
              onClick={() => {
                setCurrrentTodo(td);
              }}
            >
              {td}
            </span>
            <span
              onClick={() => {
                removeTodo(td);
              }}
            >
              <Trash
                colors={[baseTheme.colors.pomodoro, baseTheme.colors.darkColor]}
                size={"1em"}
              />
            </span>
          </ListLine>
        ))}
      </Container>
      {todoList.length > 1 ? (
        <Container>
          <Button buttonSize={"2em"} textIncludes onClick={clearTodo}>
            <Trash
              colors={[baseTheme.colors.pomodoro, baseTheme.colors.darkColor]}
              size={"1em"}
            />
            <span>{"clear tasks"}</span>
          </Button>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
export default Todo;
