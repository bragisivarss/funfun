import { DrinksMap } from "./DrinksReceiptMap";
import { MealMap } from "./MealReceiptMap";

export const Receipt = () => {
    return <div className="meal_list">
        <MealMap />
        <DrinksMap />
    </div>
};
