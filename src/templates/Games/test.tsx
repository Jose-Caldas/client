import "../../../.jest/match-media-mock";
import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderWithTheme } from "../../utils/tests/helpers";
import { MockedProvider } from "@apollo/client/testing";
import { fetchMoreMock, gamesMock } from "./mocks";

import filterMock from "../../components/ExploreSidebar/mock";

import GamesTemplate from ".";

import userEvent from "@testing-library/user-event";
import apolloCache from "../../utils/apolloCache";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
const push = jest.fn();

useRouter.mockImplementation(() => ({
    push,
    query: "",
    asPath: "",
    route: "/",
}));

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    },
}));

jest.mock("next/link", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div>{children}</div>;
    },
}));

describe("<Games />", () => {
    it("should render more games when show more is clicked", async () => {
        renderWithTheme(
            <MockedProvider
                mocks={[gamesMock, fetchMoreMock]}
                cache={apolloCache}
            >
                <GamesTemplate filterItems={filterMock} />
            </MockedProvider>
        );

        expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

        userEvent.click(
            await screen.findByRole("button", { name: /show more/i })
        );

        expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
    });

    it("should render empty when no games found", async () => {
        renderWithTheme(
            <MockedProvider mocks={[]} addTypename={false}>
                <GamesTemplate filterItems={filterMock} />
            </MockedProvider>
        );

        expect(
            await screen.findByText(
                /We didn't find any games with this filter/i
            )
        ).toBeInTheDocument();
    });

    it("should change push router when selecting a filter", async () => {
        renderWithTheme(
            <MockedProvider
                mocks={[gamesMock, fetchMoreMock]}
                cache={apolloCache}
            >
                <GamesTemplate filterItems={filterMock} />
            </MockedProvider>
        );

        userEvent.click(
            await screen.findByRole("checkbox", { name: /windows/i })
        );
        userEvent.click(
            await screen.findByRole("checkbox", { name: /linux/i })
        );
        userEvent.click(await screen.findByLabelText(/low to high/i));

        expect(push).toHaveBeenCalledWith({
            pathname: "/games",
            query: { platforms: ["windows", "linux"], sort_by: "low-to-high" },
        });
    });
});
