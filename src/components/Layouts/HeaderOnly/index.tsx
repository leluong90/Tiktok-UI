import { ReactNode } from "react";
import HeaderForOnly from "./HeaderForOnly";

type ContentProps = {
  children: ReactNode;
};
function HeaderOnly({ children }: ContentProps) {
  return (
    <div>
      <HeaderForOnly />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
