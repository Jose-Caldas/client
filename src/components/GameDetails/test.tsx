import { screen } from "@testing-library/react";
import "jest-styled-components";

import GameDetails, { GameDetailsProps } from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

const props: GameDetailsProps = {
    developer: "Different Tales",
    platforms: ["windows", "linux", "mac"],
    releaseDate: "2020-11-21T23:00:00",
    rating: "BR0",
    genres: ["Role-playng", "Narrative"],
    publisher: "Walkabout",
};

describe("<GameDetails/>", () => {
    it("should render the blocks", () => {
        renderWithTheme(<GameDetails {...props} />);
        expect(
            screen.getByRole("heading", { name: /Developer/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /Release Date/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /Platforms/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /publisher/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /rating/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /genres/i })
        ).toBeInTheDocument();
    });
    it("should render platforms icons", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(
            screen.getByRole("img", { name: /windows/i })
        ).toBeInTheDocument();
        expect(screen.getByRole("img", { name: /linux/i })).toBeInTheDocument();
        expect(screen.getByRole("img", { name: /mac/i })).toBeInTheDocument();
    });
    it("should render the formated date", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByText("Nov 21, 2020")).toBeInTheDocument();
    });
    it("should render free rating when BR0", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByText(/free/i)).toBeInTheDocument();
    });
    it("should render 18+ rating when BR18", () => {
        renderWithTheme(<GameDetails {...props} rating="BR18" />);

        expect(screen.getByText(/18\+/i)).toBeInTheDocument();
    });
    it("should render a list of genres", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByText("Role-playng / Narrative")).toBeInTheDocument();
    });
});
