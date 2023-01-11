import React from "react";
import { LayoutProps } from "../types/Props";
import { Main } from "../styles/components";

const Layout = (props: LayoutProps) => {
  return <Main>{props.children}</Main>;
};
export default Layout;
