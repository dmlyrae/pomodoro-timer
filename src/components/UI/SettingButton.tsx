import { Button } from "../../styles/components";
import { ButtonProps } from "../../types/Props";
import Setting from "../UI/icons/Setting";
import { baseTheme } from "../../styles/theme";

function SettingsButton(props: ButtonProps) {
  return (
    <Button buttonSize={props.buttonSize} textIncludes onClick={props.onClick}>
      <Setting
        colors={[
          baseTheme.colors.lightBackground,
          baseTheme.colors.darkBackground,
        ]}
        size={props.buttonSize}
      />
      <span>{props.message}</span>
    </Button>
  );
}
export default SettingsButton;
