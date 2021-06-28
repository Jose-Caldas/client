import { ReactNode } from "react";
import { Wrapper } from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
};

const Button = ({
  children,
  size = "medium",
  fullWidth = false,
}: ButtonProps) => (
  <Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
