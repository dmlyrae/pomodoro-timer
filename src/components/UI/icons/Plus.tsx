import { Svg, IconProps } from "../../../styles/components";

const PlusIcon = (props: IconProps) => {
  const { colors, size } = props;
  return (
    <Svg className={""} size={size}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={colors[0]}
        fill="transparent"
      />
    </Svg>
  );
};
export default PlusIcon;
