import { Button } from "../../styles/components";
import { ButtonProps } from "../../types/Props";
import List from "../UI/icons/List";
import { baseTheme } from "../../styles/theme";
// import { useSelector } from "react-redux";

function TodoButton({ message, onClick, buttonSize }: ButtonProps) {
  // const { work } = useSelector((store: any) => store.status);
  return (
    <Button buttonSize={buttonSize} textIncludes onClick={onClick}>
      <List
        colors={[
          baseTheme.colors.lightBackground,
          baseTheme.colors.darkBackground,
        ]}
        size={buttonSize}
      />
      <span>{message}</span>
    </Button>
  );
}
export default TodoButton;
