import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.scss"


type ButtonProps = {
  to?: string;
  href?: string;
  target?: string,
  leftIcon?: ReactNode,
  rightIcon?:ReactNode,
  children?: ReactNode;
  onClick?: () => void;
  primary?: boolean;
};

const Button = ({ to, href , target , leftIcon , rightIcon  ,  onClick , children , primary , ...passProps }: ButtonProps) => {
  let Comp: React.ElementType = "button";

  const _props : Record<string , any> = {
    onClick,
  };
  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
      Comp = "a";
    _props.href = href;
    _props.target = target ||"_blank" ; // mở tab mới
    _props.rel = "noopener noreferrer"; // tăng cường bảo mật khi mở tab mới


  }

  return (
    <Comp className="primary" {..._props}>
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="title">{children}</span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
