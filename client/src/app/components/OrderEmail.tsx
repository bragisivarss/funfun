"use client";
import axios from "axios";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { useData } from "../utils/Context";

export const Email = () => {
    const {
        email,
        setEmail,
        people,
        selectedDateTime,
        selectedMeal,
        selectedDrinks,
    } = useData();

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedMeal || selectedDrinks.length === 0) {
            toast.warn('Please create- or search for order');
            router.push("/")
            return;
        }

        const order = {
            email,
            people,
            date: selectedDateTime?.toISOString(), 
            dish: {
                idMeal: selectedMeal.idMeal,
                strMeal: selectedMeal.strMeal,
                strCategory: selectedMeal.strCategory,
                strMealThumb: selectedMeal.strMealThumb,
                price: 2500
            },
            drinks: selectedDrinks.filter((drink) => drink.amount > 0).map((drink) => ({
                idDrink: drink.idDrink,
                strDrink: drink.strDrink,
                strCategory: drink.strCategory,
                strDrinkThumb: drink.strDrinkThumb,
                strGlass: drink.strGlass,
                amount: drink.amount
            }))
        };

        axios.post("http://localhost:3001/api/create-order", order)
            .then(() => {
                router.push("./receipt");
                toast.success("Order Created Successfully!");
            })
            .catch(error => {
                toast.error(error.message);
                console.error('There was an error creating the order!', error);
            });
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
                <button type="submit">Complete order</button>
            </form>
        </>
    );
};
