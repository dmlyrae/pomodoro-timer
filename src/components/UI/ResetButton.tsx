import { Button } from "../../styles/components";
import { ButtonProps } from "../../types/Props";
import Stop from "../UI/icons/Stop";
import { baseTheme } from "../../styles/theme";
// import { useSelector } from "react-redux";

function ResetButton({ message, onClick }: ButtonProps) {
  // const { work } = useSelector((store: any) => store.status);
  return (
    <Button onClick={onClick} style={{ left: "-.7em" }}>
      <Stop
        colors={[
          baseTheme.colors.lightBackground,
          baseTheme.colors.darkBackground,
        ]}
        size={"3.5em"}
      />
      <span>{message}</span>
    </Button>
  );
}
export default ResetButton;
