import { Button } from "../../styles/components";
import { ButtonProps } from "../../types/Props";
import Play from "../UI/icons/Play";
import Pause from "../UI/icons/Pause";
import { baseTheme } from "../../styles/theme";
import { useSelector } from "react-redux";

function PlayButton({ message, onClick }: ButtonProps) {
  const { work } = useSelector((store: any) => store.status);
  return (
    <Button onClick={onClick}>
      {work ? (
        <Pause
          colors={[
            baseTheme.colors.lightBackground,
            baseTheme.colors.darkBackground,
          ]}
        />
      ) : (
        <Play
          colors={[
            baseTheme.colors.lightBackground,
            baseTheme.colors.darkBackground,
          ]}
        />
      )}
      <span>{message}</span>
    </Button>
  );
}
export default PlayButton;
