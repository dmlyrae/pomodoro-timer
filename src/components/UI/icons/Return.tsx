import { Svg, IconProps } from "../../../styles/components";

const ReturnIcon = (props: IconProps) => {
  const { className, colors, size } = props;
  return (
    <Svg className={className} size={size}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        fill="transparent"
        stroke={colors[0]}
      />
    </Svg>
  );
};
export default ReturnIcon;
