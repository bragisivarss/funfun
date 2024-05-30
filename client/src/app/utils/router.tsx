"use client";
import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DishRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/dish");
    };

    return (
        <button className="btn_new_order" onClick={handleClick}>
            Create Order
        </button>
    );
};

export const DrinkRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/dish");
    };

    return <button onClick={handleClick}>Create Order</button>;
};

export const OrderRouteWithSaveButton = () => {
    const { tempSelectedDrinks, setSelectedDrinks } = useData();
    const router = useRouter();

    const price = 1000;

    const handleClick = () => {
        if(tempSelectedDrinks){
            tempSelectedDrinks.map((drink) => {
                drink.price = price;
            })
        }
        setSelectedDrinks(tempSelectedDrinks);
        router.push("/order");
    };

    return (
        <button className="btn_to_order" onClick={handleClick}>
            Go to Order
        </button>
    );
};

export const DrinkRouteWithSaveButton = () => {
    const router = useRouter();
    const { tempSelectedMeal, setSelectedMeal } = useData();

    const price = "3000";

    const handleClick = () => {
        if (!tempSelectedMeal) {
            throw new Error("Something went terribly wrong");
        }
        tempSelectedMeal.price = price;
        setSelectedMeal(tempSelectedMeal);
        router.push("/drinks");
    };

    return (
        <button className="btn_to_new_order" onClick={handleClick}>
            Continue
        </button>
    );
};

export const OrderRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/order");
    };

    return <button onClick={handleClick}>Go to Order</button>;
};

export const BackRouteButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <div className="receipt_btn_container">
            <button className="btn_to_order" onClick={handleClick}>
                Back Home
            </button>
        </div>
    );
};

type DishProps = {
    dishName: string;
};

export const SelectDish: React.FC<DishProps> = ({ dishName }) => {
    const router = useRouter();
    const { setSelectedMeal } = useData();

    const handleClick = async () => {
        try {
            const formattedDishName = dishName.replace(/ /g, "_");
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${formattedDishName}`
            );
            setSelectedMeal(response.data);
            toast.success("Dish selected successfully");
            router.push("/drinks");
        } catch (err) {
            toast.error("Unable to select dish");
        }
    };

    return (
        <button className="btn_to_drinks_home" onClick={handleClick}>
            Select Dish and Continue
        </button>
    );
};
