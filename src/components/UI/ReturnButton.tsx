import { Button, ColoredText } from "../../styles/components";
import { ButtonProps } from "../../types/Props";
import Return from "../UI/icons/Return";
import { baseTheme } from "../../styles/theme";

function PlayButton(props: ButtonProps) {
  return (
    <Button onClick={props.onClick} buttonSize={"2em"}>
      <Return
        colors={[baseTheme.colors.primary, baseTheme.colors.primary]}
        size={"1.5em"}
      />
      <ColoredText color={baseTheme.colors.primary} pointer>
        {props.message}
      </ColoredText>
    </Button>
  );
}
export default PlayButton;
