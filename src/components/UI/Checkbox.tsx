import { baseTheme } from "../../styles/theme";
import ReactSlider from "react-slider";
import { ChechboxProps } from "../../types/Props";

function Checkbox({ value, colorClass, onChange }: ChechboxProps) {
  return (
    <ReactSlider
      className={"sound " + colorClass}
      thumbClassName={"check-thumb"}
      trackClassName={"truck"}
      value={value}
      min={1}
      max={2}
      onChange={(newValue) => onChange(newValue)}
    />
  );
}
export default Checkbox;
