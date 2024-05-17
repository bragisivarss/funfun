"use client";
import DateTimePicker from "react-datetime-picker";
import { useData } from "../utils/Context";

export const Cal = () => {
    const { selectedDateTime, setSelectedDateTime } = useData();

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
                            onChange={setSelectedDateTime}
                            secondAriaLabel="Second"
                            value={selectedDateTime}
                            yearAriaLabel="Year"
                        />
                        <div className="btn_container">
                        </div>
                    </main>
                </div>
            </div>
    );
};
