import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { FormLink, FormWrapper } from "./styles";

import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Form/>", () => {
    it("should render the medium size by default", () => {
        const { container } = renderWithTheme(
            <FormWrapper>
                <FormLink>
                    <a href="#">Nice Link</a>
                </FormLink>
            </FormWrapper>
        );
        expect(container.parentElement).toMatchInlineSnapshot(`
            .c0 .sc-bdnxRM {
              margin: 1.6rem 0;
            }

            .c0 .sc-gKAaRy {
              margin: 3.2rem auto 1.6rem;
            }

            .c1 {
              font-size: 1.4rem;
              color: #030517;
              text-align: center;
            }

            .c1 a {
              color: #3CD3C1;
              -webkit-text-decoration: none;
              text-decoration: none;
              border-bottom: 0.1rem solid #3CD3C1;
              -webkit-transition: color,border 0.1s ease-in-out;
              transition: color,border 0.1s ease-in-out;
              margin-right: 0.8rem;
            }

            .c1 a:hover {
              color: #29b3a3;
              border-bottom: 0.1rem solid #29b3a3;
            }

            <body>
              <div>
                <div
                  class="c0"
                >
                  <div
                    class="c1"
                  >
                    <a
                      href="#"
                    >
                      Nice Link
                    </a>
                  </div>
                </div>
              </div>
            </body>
        `);
    });
});
