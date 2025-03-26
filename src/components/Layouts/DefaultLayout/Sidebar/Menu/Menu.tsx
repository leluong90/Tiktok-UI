import React, { ReactNode } from "react";

type MenuProps = {
  children: ReactNode;
};
const Menu: React.FC<MenuProps> = ({ children }) => {
  return <nav>{children}</nav>;
};

export default Menu;
