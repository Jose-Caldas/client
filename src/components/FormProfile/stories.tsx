import { Story, Meta } from "@storybook/react/types-6-0";
import FormProfile from "../FormProfile";

export default {
    title: "Form/FormProfile",
    component: FormProfile,
} as Meta;

export const Default: Story = (args) => <FormProfile {...args} />;
