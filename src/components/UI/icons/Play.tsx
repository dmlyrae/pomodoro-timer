import { Svg, IconProps } from "../../../styles/components";

const PlayIcon = (props: IconProps) => {
  const { className, colors } = props;
  return (
    <Svg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        fill={colors[0]}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        fill={colors[1]}
      />
    </Svg>
  );
};
export default PlayIcon;
