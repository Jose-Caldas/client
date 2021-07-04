import { Story, Meta } from "@storybook/react/types-6-0";
import GameCardSlider from "../GameCardSlider";
import { GameCardProps } from "../GameCard";

import items from "./mock";

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
