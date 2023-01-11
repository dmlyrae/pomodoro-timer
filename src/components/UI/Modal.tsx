import { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  ModalBackground,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "../../styles/components";

interface IModal {
  showModal: any;
  setShowModal: any;
  addTodo: any;
}
export const Modal = ({ showModal, setShowModal, addTodo }: IModal) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    const handler = function(e: any) {
      keyPress(e);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {showModal ? (
        <ModalBackground onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>Add target to your plan</h1>
                <p>
                  <input
                    id="todo_add"
                    placeholder="type here..."
                    onKeyDown={(e: any) => {
                      if (e.key === "Enter" && e.target.value !== "") {
                        addTodo(e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev: any) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  );
};
