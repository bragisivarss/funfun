import Link from "next/link";
import { useData } from "../utils/Context";

export const SelectDrinksContainer = () => {
    const { selectedMeal, setSelectedMeal } = useData();

    return (
        <div className="continue_container">
            <div className="next_step">
                <p>Selected meal *MEAL NAME*</p>
                <p>Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <button  className="btn_to_drinks">
                    <Link href="./drinks">Continue</Link>
                </button>
            </div>
        </div>
    );
};
