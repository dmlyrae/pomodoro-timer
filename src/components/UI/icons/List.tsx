import { Svg, IconProps } from "../../../styles/components";

const ListIcon = (props: IconProps) => {
  const { colors, size } = props;
  return (
    <Svg className={""} size={size}>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        stroke={colors[0]}
        fill="transparent"
      />
    </Svg>
  );
};
export default ListIcon;
