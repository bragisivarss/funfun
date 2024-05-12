"use client";
import Link from "next/link";
import { useData } from "../utils/Context";

export const ButtonToOrder = () => {
    const { selectedMeal, tempSelectedDrinks, setSelectedDrinks } = useData();

    const handleClick = () => {
        console.log(tempSelectedDrinks);
        console.log(selectedMeal);
        setSelectedDrinks(tempSelectedDrinks);
    };

    return (
        <div className="continue_container">
            <div className="next_step">
                <p>Selected drinks</p>
                <p>*DRINK NAME*: *AMOUNT*</p>
                <p>Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <button className="btn_to_drinks" onClick={handleClick}>
                    <Link href="./order">Continue</Link>
                </button>
            </div>
        </div>
    );
};
