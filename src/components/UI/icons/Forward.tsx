import { Svg, IconProps } from "../../../styles/components";

const ForwardIcon = (props: IconProps) => {
  const { colors, size } = props;
  return (
    <Svg className={"stop-icon"} size={size} filled>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
        stroke={colors[0]}
        fill="transparent"
      />
    </Svg>
  );
};
export default ForwardIcon;
