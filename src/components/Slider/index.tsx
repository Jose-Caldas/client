import { forwardRef } from "react";
import { ForwardRefRenderFunction } from "react";
import { ReactNode } from "react";
import SlickSlider, { Settings } from "react-slick";

import { Wrapper } from "./styles";

export type SliderSettings = Settings;

export type SliderProps = {
    children: ReactNode;
    settings: SliderSettings;
};

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
    { children, settings },
    ref
) => (
    <Wrapper>
        <SlickSlider ref={ref} {...settings}>
            {children}
        </SlickSlider>
    </Wrapper>
);

export default forwardRef(Slider);
