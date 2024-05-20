"use client";
import DateTimePicker from "react-datetime-picker";
import { useData } from "../utils/Context";
import { useState } from "react";

export const Cal = () => {
const [showWarning, setShowWarning] = useState<boolean>(false);
    const { selectedDateTime, setSelectedDateTime } = useData();

    const handleDateTimeChange = (dateTime: Date | null) => {
        if (dateTime instanceof Date) {
            setSelectedDateTime(dateTime);
            setShowWarning(dateTime.getTime() > Date.now());
        } else {
            setShowWarning(false); // Reset warning if dateTime is null
        }
    };

    return (
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
                        onChange={handleDateTimeChange}
                        secondAriaLabel="Second"
                        value={selectedDateTime}
                        yearAriaLabel="Year"
                    />
                </main>
            </div>
            {selectedDateTime && selectedDateTime.getTime() < Date.now() && (
                <div className="selected_date">
                    Are you a time traveler? Please select a date in the future.
                </div>
            )}
        </div>
    );
};
