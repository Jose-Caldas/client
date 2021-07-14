import { Story, Meta } from "@storybook/react/types-6-0";
import GameDetails, { GameDetailsProps } from "../GameDetails";

export default {
    title: "GAME/GameDetails",
    component: GameDetails,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story = (args) => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
        <GameDetails platforms={["windows", "linux", "mac"]} {...args} />
    </div>
);
