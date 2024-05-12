import { useData } from "../utils/Context";

export const MealMap = () => {
    const { selectedMeal } = useData();

    return <div className="meal-list">
        <p>Selected Meal: {selectedMeal.strMeal}</p>
        <p>Meal Category: {selectedMeal.strCategory}</p>
    </div>;
};
