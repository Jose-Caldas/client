import TextField from "../TextField";
import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import { FormWrapper, FormLink } from "../Form/styles";


import Button from "../Button";

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        icon={<AccountCircle />}
        name="username"
        placeholder="Username"
        type="text"
      ></TextField>
      <TextField
        icon={<Email />}
        name="Email"
        placeholder="Email"
        type="email"
      ></TextField>
      <TextField
        icon={<Lock />}
        name="password"
        placeholder="Password"
        type="password"
      ></TextField>
      <TextField
        icon={<Lock />}
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
      ></TextField>
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignUp;
