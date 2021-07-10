import { Story, Meta } from "@storybook/react/types-6-0";
import FormSignIn from "../FormSignin";

export default {
  title: "FORM/FormSignIn",
  component: FormSignIn,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ width: 300, margin: "auto" }}>
    <FormSignIn {...args} />
  </div>
);
