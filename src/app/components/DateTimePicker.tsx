"use client";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Cal = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};
