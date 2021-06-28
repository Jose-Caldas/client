import { ReactNode } from "react";
import { Wrapper } from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
};

const Button = ({ children, size = "medium" }: ButtonProps) => (
  <Wrapper size={size}>{!!children && <span>{children}</span>}</Wrapper>
);

export default Button;
