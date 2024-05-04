"use client";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import starter from "../assets/starter.png";
import seafood from "../assets/seafood.png";
import lamb from "../assets/lamb.png";

export const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        align: "center",
    });

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div className="embla">
            <div className="embla_viewport" ref={emblaRef}>
                <div className="embla_container">
                    <div className="embla_slide">
                        <Image
                            src={starter}
                            alt="Starter"
                        />
                    </div>
                    <div className="embla_slide">
                        <Image
                            src={seafood}
                            alt="Seafood"
                        />
                    </div>
                    <div className="embla_slide">
                        <Image src={lamb} alt="Lamb" />
                    </div>
                </div>
            </div>

            <div className="embla_controls">
                <div className="embla_buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
                <div className="embla_dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla_dot'.concat(
                                index === selectedIndex ? ' embla_dot-selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
