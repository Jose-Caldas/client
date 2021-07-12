import React, {
    forwardRef,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
} from "react";
import { Wrapper, wrapperProps } from "./styles";

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

const Button: React.ForwardRefRenderFunction<wrapperProps, ButtonProps> = (
    {
        children,
        size = "medium",
        fullWidth = false,
        minimal = false,
        icon,
        ...props
    },
    ref
) => (
    <Wrapper
        size={size}
        fullWidth={fullWidth}
        hasIcon={!!icon}
        minimal={minimal}
        ref={ref}
        {...props}
    >
        {icon}
        {!!children && <span>{children}</span>}
    </Wrapper>
);

export default forwardRef(Button);
