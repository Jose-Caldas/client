import { ReactNode } from "react";
import { Wrapper } from "./styles";

export type AuthProps = {
  children?: ReactNode;
};

const Auth = ({ children }: AuthProps) => (
  <Wrapper>
    <h1>{children}</h1>
  </Wrapper>
);

export default Auth;
