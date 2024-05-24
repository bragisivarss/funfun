"use client";
import { toast } from "react-toastify";
import { useData } from "../utils/Context";
import { useRouter } from "next/navigation";

export const MealMap = () => {
    const { selectedMeal } = useData();
    const router = useRouter();

    if (!selectedMeal) {
        toast.warn("You need to place an order first!");
        router.push("/");
        return;
    }

    return (
        <div className="receipt_meal">
            <div className="ordered_meal">
                <p className="selected_meal_order">Selected Meal <span className="block">{selectedMeal.strMeal}</span></p>
            </div>

            <div className="meal_origin">
                <p>Meal Origin <span className="block">{selectedMeal.strArea}</span></p>
            </div>

            <div className="meal_category">
                <p>Meal Category <span className="block">{selectedMeal.strCategory}</span></p>
            </div>
        </div>
    );
};
