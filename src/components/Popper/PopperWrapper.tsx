import { ReactNode } from "react";
import "./Popper.scss";

type PopperWrapperProps = {
  children: ReactNode;
};

function PopperWrapper({ children }: PopperWrapperProps) {
  return <div className="popper-wrapper">{children}</div>;
}

export default PopperWrapper;
