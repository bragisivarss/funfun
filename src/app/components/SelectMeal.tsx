"use client";
import { useState, useEffect} from "react";
import Image from "next/image";

export const MealSelect = () => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((data) => {
                setMeal(data.meals[0]);
                console.log(data.meals[0]);
            });
    }, []);

    if (!meal) {
        return <div>loading...</div>;
    }

    const ingredients = Object.keys(meal)
        .filter(
            (key) =>
                key.startsWith("strIngredient") &&
                meal[key] &&
                meal[key].trim() !== ""
        )
        .map((key) => meal[key]);

    return (
        <>
            <div className="select_dish">
                <div className="dish_img">
                    <Image
                        className="image"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        width={450}
                        height={400}
                    />
                    <p className="dish_name">{meal.strMeal}</p>
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
                <button>Generate New Dish</button>
            </div>
                </div>
        </>
    );
};
