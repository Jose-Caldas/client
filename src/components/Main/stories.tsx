import { Story, Meta } from "@storybook/react/types-6-0";

import Main from ".";

export default {
  title: "Main",
  component: Main,
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: "React Avançado",
  description: "TypeScript, ReactJS, NextJS e Styled-Components",
};
// export const Second: Story = (args) => <Main {...args} />;
// Second.args = {
//   title: "banana",
//   description: "32323232",
// };
