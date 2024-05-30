import { DrinksMap } from "./DrinksReceiptMap";
import { MealMap } from "./MealReceiptMap";
import { ThankYou } from "./ThankYou";
import { Totals } from "./Totals";

export const Receipt = () => {
    return (
        <>
            <div className="meal_list">
                <MealMap />
                <DrinksMap />
            </div>
            <div className="thank_you">
                <ThankYou />
                <Totals />
            </div>
        </>
    );
};
