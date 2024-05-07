"use client";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Cal = () => {
    const [value, onChange] = useState<Value>(new Date());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="Sample">
                <div className="Sample__container">
                    <main className="Sample__container__content">
                        <DateTimePicker
                            amPmAriaLabel="Select AM/PM"
                            calendarAriaLabel="Toggle calendar"
                            clearAriaLabel="Clear value"
                            dayAriaLabel="Day"
                            hourAriaLabel="Hour"
                            maxDetail="second"
                            minuteAriaLabel="Minute"
                            monthAriaLabel="Month"
                            nativeInputAriaLabel="Date and time"
                            onChange={onChange}
                            secondAriaLabel="Second"
                            value={value}
                            yearAriaLabel="Year"
                            onSubmit={handleSubmit}
                        />
                        <button>Save date</button>
                    </main>
                </div>
            </div>
        </form>
    );
};
