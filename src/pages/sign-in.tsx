import Auth from "../templates/Auth";
import * as S from "../templates/Auth/styles";
import TextField from "../components/TextField";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";
import Button from "../components/Button";
import Link from "next/link";

function SignIn() {
  return (
    <Auth title="Sign In">
      <S.Form>
        <TextField icon={<Email />} placeholder="Email"></TextField>
        <TextField icon={<Lock />} placeholder="password"></TextField>
        <Link href="#">
          <h1>Forgot password?</h1>
        </Link>
        <Button as="a" fullWidth>
          Sign in now
        </Button>
        <Link href="#">
          <h2>
            Don’t have an account? <span>Sign up</span>
          </h2>
        </Link>
      </S.Form>
    </Auth>
  );
}

export default SignIn;
