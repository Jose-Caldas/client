import { Story, Meta } from "@storybook/react/types-6-0";
import TextField, { TextFieldProps } from "../TextField";
import { Email } from "@styled-icons/material-outlined/Email";

export default {
  title: "FORM/TextField",
  component: TextField,
  args: {
    label: "E-mail",
    labelFor: "Email",
    id: "Email",
    initialValue: "",
    placeholder: "john.doe@gmail.com",
    icon: <Email />,
    error: false,
  },
  argTypes: {
    onInput: { action: "changed" },
    icon: { type: "" },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 380, padding: 10, height: 50 }}>
    <TextField {...args} />
  </div>
);

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 380, padding: 10 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: "Ops...something is wrong",
};
