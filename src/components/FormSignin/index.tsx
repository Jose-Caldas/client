import TextField from "../../components/TextField";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";
import Button from "../../components/Button";
import Link from "next/link";

import { FormWrapper, FormLink, ForgotPassword } from "../Form/styles";

// import * as S from "./styles";

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField icon={<Email />} placeholder="Email" type="email"></TextField>
      <TextField
        icon={<Lock />}
        placeholder="Password"
        type="password"
      ></TextField>
      <ForgotPassword href="#">Forgot your password?</ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Don’t have an account?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
