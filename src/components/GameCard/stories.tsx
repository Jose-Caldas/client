import { Story, Meta } from "@storybook/react/types-6-0";
import GameCard, { GameCardProps } from "../GameCard";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: "R$ 240,00",
    promotionalPrice: "R$200,00",
  },
  argTypes: {
    onFav: {
      action: "Clicked",
    },
    ribbon: {
      type: "string",
    },
  },

  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />;

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary",
};
