import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Wrapper } from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element; // poderia ser também ReactNode
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => (
  <Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
