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

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    },
}));

jest.mock("components/ExploreSidebar", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock ExploreSidebar">{children}</div>;
    },
}));

describe("<GamesTemplate />", () => {
    it("should render loading when starting the template", () => {
        renderWithTheme(
            <MockedProvider mocks={[]} addTypename={false}>
                <GamesTemplate filterItems={filterMock} />
            </MockedProvider>
        );

        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    });
    it("should render sections", async () => {
        renderWithTheme(
            <MockedProvider mocks={[gamesMock]} addTypename={false}>
                <GamesTemplate filterItems={filterMock} />
            </MockedProvider>
        );
        // it starts without data
        // shows loading
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
        // we wait until we have data to get the elements
        // get => tem certeza do elemento
        // query => Não tem o elemento
        // find => processos assincronos
        expect(
            await screen.findByTestId("Mock ExploreSidebar")
        ).toBeInTheDocument();
        expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

        expect(
            await screen.findByRole("button", { name: /show more/i })
        ).toBeInTheDocument();
    });

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
});
