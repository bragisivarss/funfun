"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { useData } from "../utils/Context";

export const MealSelect = () => {
    const { tempSelectedMeal, setTempSelectedMeal } = useData();

    const generateDish = () => {
        fetchMeal();
    };

    const fetchMeal = useCallback(async () => {
        try {
            const { data } = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            setTempSelectedMeal(data.meals[0]);
        } catch (err) {}
    }, [setTempSelectedMeal]);

    useEffect(() => {
        fetchMeal();
    }, [fetchMeal]);

    if (!tempSelectedMeal) {
        return <div>loading...</div>;
    }

    const ingredients = Object.keys(tempSelectedMeal)
        .filter(
            (key) =>
                key.startsWith("strIngredient") &&
                tempSelectedMeal[key] &&
                tempSelectedMeal[key].trim() !== ""
        )
        .map((key) => tempSelectedMeal[key]);

    return (
        <>
            <div className="select_dish dish_one">
                <div className="dish_img">
                    <Image
                        className="image"
                        src={tempSelectedMeal.strMealThumb}
                        alt={tempSelectedMeal.strMeal}
                        width={450}
                        height={400}
                    />
                    <p className="dish_name">{tempSelectedMeal.strMeal}</p>
                    <div className="dish_info">
                        <h3 className="ingredients">Ingredients</h3>
                        <ul>
                            {ingredients.map((item, index) => {
                                return (
                                    <li className="ingredient" key={index}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="btn_new_dish">
                    <button onClick={generateDish}>Generate New Dish</button>
                </div>
            </div>
        </>
    );
};
