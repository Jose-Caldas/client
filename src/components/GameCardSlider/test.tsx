import "jest-styled-components";
import "../../../.jest/match-media-mock";
import { render } from "../../utils/test-utils";
import items from "./mock";

import GameCardSlider from ".";

describe("<GameSlider />", () => {
    it("should render 4 active items", () => {
        const { container } = render(<GameCardSlider items={items} />);
        expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
    });
});
