import Image from "next/image";

{
    /*"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const SelectDrinks = () => {
    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
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

export const SelectDrinks = () => {
    return (
        <>
            <div className="drinks_wrapper">
                <div className="drinks_container">
                    <div className="single_drink">
                        <Image src={coke} alt="Coca cola" height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={fanta} alt="Fanta" height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={sprite} alt="Sprite" height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={stella} alt="Gull" height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={vodka} alt="Smirnoff" height={200} />
                    </div>
                    <div className="single_drink">
                        <Image src={corona} alt="Corona" height={200} />
                    </div>
                </div>
            </div>
        </>
    );
};
