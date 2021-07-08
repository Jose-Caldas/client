import { Story, Meta } from "@storybook/react/types-6-0";
import FormSignin from "../FormSignin";

export default {
  title: "FORM/FormSignin",
  component: FormSignin,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ width: 300, margin: "auto" }}>
    <FormSignin {...args} />
  </div>
);
