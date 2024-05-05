"use client";
import { useState, useEffect, useCallback } from "react";
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

    return (
        <>
            <div className="select_dish">
                <div className="dish_img">
                    <Image src={meal.strMealThumb} alt={meal.strMeal} width={300} height={200} />                </div>
                <div className="dish_info"></div>
            </div>
            <div className="next_step"></div>
        </>
    );
};
