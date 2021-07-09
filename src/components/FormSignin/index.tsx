import TextField from "../../components/TextField";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";
import Button from "../../components/Button";
import Link from "next/link";

import * as S from "./styles";

const FormSignin = () => (
  <S.Wrapper>
    <form>
      <TextField icon={<Email />} placeholder="Email"></TextField>
      <TextField icon={<Lock />} placeholder="password"></TextField>

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <S.FormLink>
        Don’t have an account?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
);

export default FormSignin;
