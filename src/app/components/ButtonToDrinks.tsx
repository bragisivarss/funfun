"use client";
import Link from "next/link";
import { useData } from "../utils/Context";

export const SelectDrinksContainer = () => {
    const { tempSelectedMeal, setSelectedMeal } = useData();

    const handleClick = () => {
        setSelectedMeal(tempSelectedMeal);
    };

    return (
        <div className="continue_container">
            <div className="next_step">
                {tempSelectedMeal && (
                    <p className="selected_meal">Selected meal<span className="selected_meal_name">{tempSelectedMeal.strMeal}</span></p>
                )}
                <p className="next_step_text">Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <button className="btn_to_drinks" onClick={handleClick}>
                    <Link href="./drinks">Continue</Link>
                </button>
            </div>
        </div>
    );
};
