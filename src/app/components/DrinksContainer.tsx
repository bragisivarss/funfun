"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

{
    /*"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const SelectDrinks = () => {
    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDrinks(data.drinks[0]);
                console.log(drinks);
            });
    }, []);

    if (!drinks) {
        return <div>Loading...</div>;
    }

    const ingredients = Object.keys(drinks)
        .filter(
            (key) =>
                key.startsWith("strIngredient") &&
                drinks[key] &&
                drinks[key].trim() !== ""
        )
        .map((key) => drinks[key]);

    return (
        <>
            <div className="select_dish">
                <div className="dish_img">
                    <Image
                        className="image"
                        src={drinks.strDrinkThumb}
                        alt={drinks.strDrink}
                        width={450}
                        height={400}
                    />
                    <p className="dish_name">{drinks.strDrink}</p>
                    <div className="dish_info">
                        <h3 className="ingredients">Ingredients</h3>
                        <ul>
                            {ingredients.map((item, index) => {
                                return (
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDrinks(data.drinks);
                console.log(drinks);
            });
    }, [drinks]);

    if (!drinks) {
        return <div>Loading...</div>;
    }
                                    <li className="ingredient" key={index}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}; */
}

import coke from "../assets/coke.png";
import stella from "../assets/stella.png";
import sprite from "../assets/sprite.png";
import vodka from "../assets/vodka.png";
import fanta from "../assets/fanta.png";
import corona from "../assets/corona.png";
import axios from "axios";

type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
};


export const SelectDrinks = () => {
    const [drinks, setDrinks] = useState<Drink[]>();

    const fetchDrinks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer"
            );
            setDrinks(data.drinks);
        } catch (err) {}
        console.log(drinks);
    }, []);

    useEffect(() => {
        fetchDrinks();
    }, [fetchDrinks]);

    if (!drinks) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="drinks_wrapper">
                <div className="drinks_container">
                    <div className="single_drink">
                        <Image src={drinks[0].strDrinkThumb} alt={drinks[0].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[1].strDrinkThumb} alt={drinks[1].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[2].strDrinkThumb} alt={drinks[2].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[3].strDrinkThumb} alt={drinks[3].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[4].strDrinkThumb} alt={drinks[4].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[5].strDrinkThumb} alt={drinks[5].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[6].strDrinkThumb} alt={drinks[6].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[7].strDrinkThumb} alt={drinks[7].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[8].strDrinkThumb} alt={drinks[8].strDrink} width={200} height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={drinks[9].strDrinkThumb} alt={drinks[9].strDrink} width={200} height={200} />
                    </div>
                </div>
            </div>
        </>
    );
};
