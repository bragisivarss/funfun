"use client";
import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";
import React from "react";
import axios from "axios";

export const DishRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/dish");
    };

    return <button className="btn_new_order" onClick={handleClick}>Create Order</button>;
};

export const DrinkRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/dish");
    };

    return <button onClick={handleClick}>Create Order</button>;
};

export const DrinkRouteWithSaveButton = () => {
    const router = useRouter();
    const { tempSelectedMeal, setSelectedMeal } = useData();

    const handleClick = () => {
        setSelectedMeal(tempSelectedMeal);
        router.push("/drinks");
    };

    return <button className="btn_to_new_order" onClick={handleClick}>Continue</button>;
};

export const OrderRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/order");
    };

    return <button onClick={handleClick}>Go to Order</button>;
};

export const OrderRouteWithSaveButton = () => {
    const { tempSelectedDrinks, setSelectedDrinks } = useData();
    const router = useRouter();

    const handleClick = () => {
        setSelectedDrinks(tempSelectedDrinks);
        router.push("/order");
    };

    return <button className="btn_to_order" onClick={handleClick}>Go to Order</button>;
};

export const BackRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return <div className="receipt_btn_container">
    <button className="btn_to_order" onClick={handleClick}>Back Home</button>
    </div>
}
