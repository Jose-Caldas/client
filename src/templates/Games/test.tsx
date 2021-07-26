import "../../../.jest/match-media-mock";
import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderWithTheme } from "../../utils/tests/helpers";
import { MockedProvider } from "@apollo/client/testing";
import { QUERY_GAMES } from "../../graphql/queries/games";

import filterMock from "../../components/ExploreSidebar/mock";

import GamesTemplate from ".";

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
            <MockedProvider
                mocks={[
                    {
                        request: {
                            query: QUERY_GAMES,
                            variables: { limit: 15 },
                        },
                        result: {
                            data: {
                                games: [
                                    {
                                        name: "RimWorld",
                                        slug: "rimworld",
                                        cover: {
                                            url:
                                                "/uploads/rimworld_8e93acc963.jpg",
                                        },
                                        developers: [
                                            { name: "Ludeon Studios" },
                                        ],
                                        price: 65.99,
                                        __typename: "Game",
                                    },
                                ],
                            },
                        },
                    },
                ]}
                addTypename={false}
            >
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
        expect(await screen.findByText(/RimWorld/i)).toBeInTheDocument();

        expect(
            await screen.findByRole("button", { name: /show more/i })
        ).toBeInTheDocument();
    });
});
