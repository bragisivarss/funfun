"use client";
import axios from "axios";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";

export const Email = () => {
    const router = useRouter();
    const {
        email,
        setEmail,
        people,
        selectedDateTime,
        selectedMeal,
        selectedDrinks,
        order,
        setOrder
    } = useData();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedMeal || selectedDrinks.length === 0) {
            toast.warn("Please create or search for order");
            router.push("/");
            return;
        }

        const newOrder = {
            email,
            people,
            date: selectedDateTime?.toISOString(),
            dish: {
                idMeal: selectedMeal.idMeal,
                strMeal: selectedMeal.strMeal,
                strCategory: selectedMeal.strCategory,
                strMealThumb: selectedMeal.strMealThumb,
                strIngredient1: selectedMeal.strIngredient1,
                strIngredient2: selectedMeal.strIngredient2,
                strIngredient3: selectedMeal.strIngredient3,
                strIngredient4: selectedMeal.strIngredient4,
                strIngredient5: selectedMeal.strIngredient5,
                strIngredient6: selectedMeal.strIngredient6,
                strIngredient7: selectedMeal.strIngredient7,
                strIngredient8: selectedMeal.strIngredient8,
                strIngredient9: selectedMeal.strIngredient9,
                strIngredient10: selectedMeal.strIngredient10,
                strIngredient11: selectedMeal.strIngredient11,
                strIngredient12: selectedMeal.strIngredient12,
                strIngredient13: selectedMeal.strIngredient13,
                strIngredient14: selectedMeal.strIngredient14,
                strIngredient15: selectedMeal.strIngredient15,
                strIngredient16: selectedMeal.strIngredient16,
                strIngredient17: selectedMeal.strIngredient17,
                strIngredient18: selectedMeal.strIngredient18,
                strIngredient19: selectedMeal.strIngredient19,
                strIngredient20: selectedMeal.strIngredient20,
                price: 2500,
            },
            drinks: selectedDrinks.map((drink) => ({
                idDrink: drink.idDrink,
                strDrink: drink.strDrink,
                strCategory: drink.strCategory,
                strDrinkThumb: drink.strDrinkThumb,
                strGlass: drink.strGlass,
                amount: drink.amount,
            })),
        };

        if (order) {
            axios
                .put("/api/update-order", newOrder)
                .then(() => {
                    router.push("/receipt");
                    toast.success("Order Updated Successfully!");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                });
        } else {
            axios
                .post("http://localhost:3001/api/create-order", newOrder)
                .then(() => {
                    router.push("/receipt");
                    toast.success("Order Created Successfully!");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                });
        }
        setOrder("")
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button type="submit">{order? "Update Order" : "Complete order"}</button>
            </form>
        </>
    );
};
