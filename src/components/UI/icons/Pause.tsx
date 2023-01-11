import { Svg, IconProps } from "../../../styles/components";

const PauseIcon = (props: IconProps) => {
  const { className, colors } = props;
  return (
    <Svg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        fill={colors[0]}
        stroke={colors[1]}
      />
    </Svg>
  );
};
export default PauseIcon;
