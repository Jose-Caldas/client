import { ReactNode } from "react";
import { Wrapper } from "./styles";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = "black",
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </Wrapper>
);

export default Heading;
