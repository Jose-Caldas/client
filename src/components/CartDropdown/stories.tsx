import { Story, Meta } from "@storybook/react/types-6-0";
import CartDropdown, { CartDropdownProps } from "../CartDropdown";

import items from "../CartList/mock";

export default {
    title: "CartDropdown",
    component: CartDropdown,
    args: {
        items,
        total: "R$ 430,00",
    },
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<CartDropdownProps> = (args) => (
    <div
        style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}
    >
        <CartDropdown {...args} />
    </div>
);
