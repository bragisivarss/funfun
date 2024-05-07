"use client";

import { useState } from "react";
import { NextBtn, PrevBtn } from "./NextPrevBtn";

export const Number = () => {
    const [num, setNum] = useState(0);

    const handleClick = (increment: any) => {
        setNum((prevNum) => {
            if (prevNum === 0 && !increment) {
                return 0; // Prevent decrementing below zero
            } else if (prevNum === 10 && increment) {
                return 10; // Prevent incrementing above 10
            } else {
                return increment ? prevNum + 1 : prevNum - 1;
            }
        });
    };

    return (
        <>
            <PrevBtn onClick={() => handleClick(false)} />
            {num}
            <NextBtn onClick={() => handleClick(true)} />
        </>
    );
};
