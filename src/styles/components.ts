import { baseTheme } from "./theme";
import styled from "styled-components";

export const Main = styled.div`
  padding-top: 1.2em;
  max-width: 340px;
  margin: 0 auto;
  text-aligin: center;
`;

interface LabelProps { }
export const Label = styled.label<LabelProps>`
  margin-top: 1.2em;
  margin-bottom: 0.3em;
  display: block;
`;
interface ColoredTextProps {
  color: string;
  pointer: boolean;
}
export const ColoredText = styled.label<ColoredTextProps>`
  color: ${(props) => props.color};
  cursor: ${(props) => (props.pointer ? "pointer" : "inherit")};
`;
interface ButtonProps {
  buttonSize?: string;
  className?: string;
  textIncludes?: Boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  background-color: ${(props) =>
    props.textIncludes ? "rgba(255,255,255,0.1)" : "transparent"};
  border-radius: 0.7em;
  padding: ${(props) => (props.textIncludes ? ".6em 3em" : "0")};
  opacity: 0.8;
  font-size: 1.4em;
  max-width: 340px;
  min-width: ${(props) =>
    props.buttonSize ? props.buttonSize : baseTheme.sizes.defaultButton.size};
  min-height: ${(props) =>
    props.buttonSize ? props.buttonSize : baseTheme.sizes.defaultButton.size};
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  text-align: center;
  color: ${baseTheme.colors.darkColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow:${(props) =>
    props.textIncludes
      ? "0px 12px 23px -1px rgba(0, 0, 0, 0.3); -webkit-box-shadow: 0px 12px 23px -1px rgba(0, 0, 0, 0.3);"
      : "none;"}
  &:hover {
    opacity: 0.9;
  }
`;

// Modal window

export interface IModalBack {
  onClick?: any;
  ref?: any;
}
export const ModalBackground = styled.div<IModalBack>`
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
export interface IModalWrapper {
  showModal?: any;
}
export const ModalWrapper = styled.div<IModalWrapper>`
  width: auto;
  height: auto;
  padding: 3em 2em;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${baseTheme.colors.darkBackground}
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  background-color: ${baseTheme.colors.darkBackground}
  color: ${baseTheme.colors.darkColor}
  p {
    margin-bottom: 1rem;
  }
  input {
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: ${baseTheme.colors.darkBackground}
    border: none;
    width: 80%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1010;
  color: #fff;
  background-color: ${baseTheme.colors.lightBackground};
  border-radius:50%;
  opacity:.7;
  background-image: url('data:image/svg+xml,
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>');
  );
  &:hover {
    opacity: 1;
  }
`;

// Lists

export const CurrentLine = styled.div`
  display: flex;
  margin: 2em 0;
  padding: 0;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .button {
    border-radius: 50%;
    opacity: 0.8;
    & > svg {
      box-shadow: 0px 12px 23px -1px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0px 12px 23px -1px rgba(0, 0, 0, 0.3);
    }
    &:hover {
      opacity: 1;
    }
  }
  .text {
    padding: 0.6em;
    // border: ${baseTheme.colors.pomodoro} 1px solid;
    background-color: ${() => "rgba(255,255,255,0.1)"};
    box-shadow: 0px 12px 23px -1px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 12px 23px -1px rgba(0, 0, 0, 0.3);
    border-radius: 0.4em;
  }
`;
export const ListLine = styled.div<{ current?: boolean }>`
  display: flex;
  margin: 0.5em 0;
  padding: 0.6em;
  flex-direction: column;
  border-radius: 10px;
  border: ${baseTheme.colors.darkColor} 1px solid;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: ${(props) =>
    (props.current ? baseTheme.colors.green : baseTheme.colors.darkColor) +
    " 1px solid"};
`;

// Containers

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CenteredDiv = styled.div`
  width: fit-content;
  justify-self: center;
  align-self: center;
`;

// SVG ICONS

export interface IconProps {
  className?: string;
  colors: string[];
  size?: string;
  fill?: boolean;
}
export const Svg = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24",
}) <{ size?: string; filled?: boolean }>`
  height: ${(props) => (props.size ? props.size : baseTheme.sizes.icons.large)};
  width: ${(props) => (props.size ? props.size : baseTheme.sizes.icons.large)};
  background-color: ${(props) =>
    props.filled ? "rgba(255,255,255,0.1)" : "transparent"};
  border-radius: ${(props) => (props.filled ? "50%" : "none")};
  padding: ${(props) => (props.filled ? ".5em" : "0")};
`;
