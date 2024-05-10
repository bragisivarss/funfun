"use client";
import Link from "next/link";
import { useData } from "../utils/Context";

{
    /*
        const { tempSelectedMeal, setSelectedMeal } = useData();
    {tempSelectedMeal && <p>{tempSelectedMeal}</p>}
        setSelectedMeal(tempSelectedMeal);
    */
}

export const SelectDrinksContainer = () => {
        const { tempSelectedMeal, setSelectedMeal } = useData();

    const handleClick = () => {
        console.log(tempSelectedMeal)
        setSelectedMeal(tempSelectedMeal);
    };

    return (
        <div className="continue_container">
            <div className="next_step">
    {tempSelectedMeal && <p>Selected meal: {tempSelectedMeal.strMeal}</p>}
                <p>Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <button className="btn_to_drinks" onClick={handleClick}>
                    <Link href="./drinks">Continue</Link>
                </button>
            </div>
        </div>
    );
};
