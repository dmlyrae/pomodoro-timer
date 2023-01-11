export type LayoutProps = {
  dark?: Boolean;
  children?: JSX.Element | JSX.Element[];
};
export type ErrorProps = {
  message: string;
  children?: JSX.Element | JSX.Element[];
};
export type ButtonProps = {
  active: boolean;
  play?: boolean;
  message: string;
  children?: JSX.Element | JSX.Element[];
  buttonSize?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export type SliderProps = {
  value: number;
  colorClass: "red" | "green";
  onChange: (value: number) => void;
};
export type ChechboxProps = {
  value: number;
  colorClass: "on" | "off";
  onChange: (value: number) => void;
};
