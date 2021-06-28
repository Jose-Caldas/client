import { ReactNode } from "react";
import { Wrapper } from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element; // poderia ser também ReactNode
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
