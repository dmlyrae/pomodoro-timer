import { baseTheme } from "../../styles/theme";
import ReactSlider from "react-slider";
import { SliderProps } from "../../types/Props";

function Slider({ value, colorClass, onChange }: SliderProps) {
  return (
    <ReactSlider
      className={"slider " + colorClass}
      thumbClassName={"thumb"}
      trackClassName={"truck"}
      value={value}
      min={1}
      max={120}
      onChange={(newValue) => onChange(newValue)}
    />
  );
}
export default Slider;
